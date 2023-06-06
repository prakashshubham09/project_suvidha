const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
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
    hiring: {
        type: String,
        require: true
    },
    vehicle: {
        type: String
    },
    description: {
        type: String
    },
    house_no: {
        type: String,
        require: true
    },
    road_area: {
        type: String,
        require: true
    },
    landmark: {
        type: String,
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    pincode: {
        type: String,
        require: true
    }
})

const plumber = new mongoose.model("plumber", clientSchema)

module.exports = plumber