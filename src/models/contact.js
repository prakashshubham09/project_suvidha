const mongoose = require("mongoose")
// const bcrypt = require("bcrypt")

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone_no: {
        type: Number,
        require: true,
        unique: true
    },

    email: {
        type: String,
        unique: true
    },

    subject : {
        type: String,
        unique: true
    },

    message : {
        tyep: string
    },

})



const contact = new mongoose.model("contact", clientSchema)

module.exports = contact