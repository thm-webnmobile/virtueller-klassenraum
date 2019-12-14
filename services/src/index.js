// Imports
import socketIO from "socket.io";

var db = require('./Database')

// Classes
const Server = require('./classes/Server');

// Config
var config = {
    "Port": 5000,
}

// Connect to Database
db.connect('mongodb://localhost:27017', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        console.log("Connected successfully to database");
    };
});

// Connection
const io = socketIO(config["Port"]);

// Server
var server = new Server(io);
server.createRoom("a");
server.createRoom("b");
server.createRoom("c");