const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    city:{
        type: String
    },
    country: {
        type: String
    },
    postalCode: {
        type: Number
    },
    about:{
        type: String
    }
})

const User = mongoose.model('Users',userSchema)

module.exports = User;