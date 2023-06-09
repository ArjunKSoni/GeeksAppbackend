const mongoos = require('mongoose')
const RegisterSchema = new mongoos.Schema({
    user: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    }
})
const Register = new mongoos.model("Auth", RegisterSchema)

module.exports = Register;