const express = require('express');
const app = express();
const port = 3000;
const UserRouter = require('./router/userRouter')


// middlewares
app.use(express.json());
app.use('/user',UserRouter);


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
app.get('/',(req,res)=>{
    res.send('Hello expressdbfksdcf')
})
app.get('/getbyid',(req,res)=>{
    res.send('Hello expressdbfksdcfassssssssssssssssssssssssssssssssssssssss')
})