const internal = {};

module.exports = internal.Board = class {
    constructor(room) {
        this.room = room;
        this.messageIndices = [];
        this.messageRating = {
            upvotes: [],
            downvotes: []
        };
    }
    
    addMessage(position) {
        var index = this.messageIndices.indexOf(position);

        if (index == -1) {
            this.messageIndices.push(position);
            this.update();
        }
    }
    removeMessage(position) {
        var index = this.messageIndices.indexOf(position);

        console.log(index + " vs " + position);

        if (index != -1) {
            this.messageIndices.splice(index, 1);
            this.update();
            console.log("remove message");
        }
    }
    upvoteMessage(position) {
        var index = this.messageIndices.indexOf(position);

        if (index != -1) {
            this.messageRating.upvotes.push("User1");
            this.update();
            console.log(this.messageRating.upvotes);
        }
    }
    downvoteMessage(position) {
        var index = this.messageIndices.indexOf(position);
        var voted;

        if (index != -1) {
            foreach(uuid in this.messageRating.downvotes){
                //getUuid vom User
                if (1 == uuid) {
                    voted = true;
                }
            }
            if (!voted){
                this.messageRating.downvotes.push("User1");
            }
            this.update();
            console.log(this.messageRating.downvotes);
        }
    }

    update() {
        var messages = [];

        for (var i = (this.messageIndices.length - 1); i >= 0; i--) {
            var index = this.messageIndices[i];
            var message = this.room.getMessage(index);

            if (message) {
                messages.push(message);
            }
        }

        this.room.notify("board", {
            "type": "LIST",
            "messages": messages
        });
    }

    sendBoard(user) {
        var messages = [];

        for (var i = (this.messageIndices.length - 1); i >= 0; i--) {
            var index = this.messageIndices[i];
            var message = this.room.getMessage(index);

            if (message) {
                messages.push(message);
            }
        }

        user.getConnection().sendPacket("board", {
            "type": "LIST",
            "messages": messages
        });
    }
}