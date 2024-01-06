const {Schema,model} = require('mongoose');

const mySchema = new Schema({
    name:String,
    email:String,
    password:String
})

module.exports = model('user',mySchema)