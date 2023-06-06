const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Suvidha:suvidha.49.pvt@cluster0.nhmlpdu.mongodb.net/suvidha?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connection Successful...")
})
.catch(()=>{
    console.log("No Connection!")
})