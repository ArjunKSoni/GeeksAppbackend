const mongoos = require('mongoose')
const ChatSchema = new mongoos.Schema({
    userA: {
        type: String
    },
    userB: {
        type: Strimg
    },
    message: {
        type: String
    },
    time: {
        type: String
    }

})
const Chat = new mongoos.model("Friend", ChatSchema)

module.exports = Chat;