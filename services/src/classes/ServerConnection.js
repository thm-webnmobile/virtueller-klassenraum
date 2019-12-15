const db = require('../Database');

const internal = {};

module.exports = internal.Server = class {
    constructor(server, connection) {
        this.server = server;
        this.connection = connection;

        var self = this;

        this.connection.on("connection", function(socket) { 
            self.handleHandshake(socket, server);
        });
    }

    handleHandshake(socket, server) {
        var address = socket.handshake.address;

        var handshake = function() {
            console.log("Handshake [" + address + "]: " + "Client can now login");

            socket.removeAllListeners();
            socket.on("handshake", handshake);
            socket.on("login", function(data) {
                console.log(data);
                // User tries to reconnect
                if (data == undefined) {
                    console.log("Handshake [" + address + "]: " + "Client is reconnecting...");

                    var user = server.getUser(socket);
                    var room = user == undefined ? undefined : user.getRoom();

                    if (room !== undefined) {
                        user.setConnection(socket); // Once a client is connection, we will register every other event
                        user.getConnection().sendPacket("login", {"state": "SUCCESS", "uuid": user.getUuid() });
                        user.setRoom(room);
                    }
                } else {
                    console.log("Handshake [" + address + "]: " + "Client is connecting...");

                    // User tries to login
                    var request = JSON.parse(data);

                    try {
                        // Now we validate the request and generate a response
                        if (request.name == undefined || request.name.length < 2 || request.name.length > 16) {
                            socket.emit("login", JSON.stringify({"state": "INVALID_NAME" })); // Invalid name
                        } else if (request.room == undefined || request.room.length > 16) {
                            socket.emit("login", JSON.stringify({"state": "INVALID_ROOM" })); // Invalid room
                        } else {
                            var name = request.name; // Name
                            var room = server.getRoom(request.room); // Room

                            if (room) {
                                var user = server.registerUser(socket);
                                user.setName(name);
                                user.setConnection(socket); // Once a client is connection, we will register every other event
                                user.getConnection().sendPacket("login", {"state": "SUCCESS", "uuid": user.getUuid() });
                                user.setRoom(room, true);
                            } else {
                                socket.emit("login", JSON.stringify({"state": "INVALID_ROOM_UUID" })); // Room does not exists
                            }

                            // TODO user needs unique uuid 
                            var collection = db.get().collection('user');
                            var query = { uuid: user.getUuid() };

                            collection.find(query).toArray(function(err, result) {     // Seatch for User in Database
                                if (err) throw err;

                                console.log(result);

                                if (result[0].uuid == user.getUuid()) {
                                    console.log("User found");  // User already exists in database
                                } else {
                                    var newUser = { name: user.getName(), uuid: user.getUuid() }; // Add User to database
                                    collection.insertOne(newUser, function(err, res) {
                                        if (err) throw err;
                                        console.log("User added to Database");
                                    });
                                }
                            })
                        }
                    } catch(error) {
                        console.log(error);

                        socket.emit("login", JSON.stringify({"state": "ERROR" }));
                    }
                }
            });

            // We notify the client, that we now listen to all the packets and show if the already know him
            socket.emit("handshake", JSON.stringify({"state": server.getUser(socket) ? 1 : 0 }));
        }

        // If we recieve the handshake, then we listen to all the packets
        socket.on("handshake", handshake);
    }
}