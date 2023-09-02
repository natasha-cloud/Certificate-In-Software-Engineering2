const mongoose = require('mongoose')    

const registrationSchema = new mongoose.Schema({
    firstName:{
        type: String, 
        trim: true 

    },
    lastName:{
        type: String,
    },
    gender:{
        type: String,
        enum: ['Male', 'Female']
    },
    country:{
        type: String,
    },
    state:{
        type: String,
    },
    town:{
        type: String,
    },
    zipcode:{
        type: String,
    },
    email:{
        type: String,
    },
    phone1:{
        type: String,
        unique: true


    },
    phone2:{
        type: String,
        unique: true


    },
    date: {
        type: String,
        required: true
    },
    


})

module.exports = mongoose.model('registration', registrationSchema)