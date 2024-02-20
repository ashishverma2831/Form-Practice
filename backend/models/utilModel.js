const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const imageSchema = new mongoose.Schema({
    avatar: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('image',imageSchema);