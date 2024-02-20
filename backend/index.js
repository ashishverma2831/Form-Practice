const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


const mongoose = require('mongoose');

const url = 'mongodb+srv://root:root@cluster0.ve2kz8r.mongodb.net/forms?retryWrites=true&w=majority'
mongoose.connect(url)
.then((result) => {
    console.log('mongoose connected');
}).catch((err) => {
    console.error(err);
});

// Routers
const UserRouter = require('./router/userRouter')
const UtilRouter = require('./router/util')


// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use('/user',UserRouter);
app.use('/util',UtilRouter);


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
app.get('/',(req,res)=>{
    res.send('Hello expressdbfksdcf')
})
app.get('/getbyid',(req,res)=>{
    res.send('Hello express')
})