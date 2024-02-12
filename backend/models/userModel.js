const {Schema,model} = require('mongoose');

const mySchema = new Schema({
    name:{
        type:String,
        required:true,
        // unique:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    password:String,
    confirm:String
})

module.exports = model('user',mySchema)