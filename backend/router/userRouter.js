const express = require('express');
const router = express.Router();
const Model = require('../models/userModel')

router.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,email,password,confirm} = req.body
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

router.post('/oauth',(req,res)=>{
    console.log(req.body);
    const {name,email,photo} = req.body
    // console.log(name,email,photo);
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.json(err)
    });
})

module.exports = router