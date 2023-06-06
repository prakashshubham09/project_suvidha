const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    full_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },

})
const registration = new mongoose.model("registrations", clientSchema)

module.exports = registration