const mongoos = require('mongoose')
const FriendSchema = new mongoos.Schema({
    userA: {
        type: String
    },
    userB: {
        type: String
    },
    nameA: {
        type: String
    },
    nameB: {
        type: String
    },
    status: {
        type: String
    }

})
const Friend = new mongoos.model("Friend", FriendSchema)

module.exports = Friend;