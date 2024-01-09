const mongoose = require('mongoose');

const url = 'mongodb+srv://root:root@cluster0.ve2kz8r.mongodb.net/forms?retryWrites=true&w=majority'
mongoose.connect(url)
.then((result) => {
    console.log('mongoose connected');
}).catch((err) => {
    console.error(err);
});

module.exports = mongoose;