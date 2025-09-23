const express = require('express');
const router = express.Router();
const OwnerModel = require("../models/owner-model");

router.get("/", function(req, res){
    res.send("Owners page");
});

// console.log(process.env.NODE_ENV);
router.post("/create",async function(req, res){
    let owners =await OwnerModel.find();
    if(owners.length > 0){
        return res.status(503).send("Owner already exists"); 
    }

    let {fullname, email, password} = req.body;
    let createOwner = await OwnerModel.create({
        fullname,
        email,
        password,
    });
    res.status(201).send(createOwner);
});

module.exports = router;