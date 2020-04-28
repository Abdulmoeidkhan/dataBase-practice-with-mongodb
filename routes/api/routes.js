const express = require("express");
const router = express.Router();
const User = require("../../model/userModel")



router.get("/",(req,res)=>{
    User.find()
    .sort({
        date: -1 
    })
    .then(
        users => res.json(users)
    )
    .catch(
        err=>res.status(404).json("somethingwent wrong with get")
    )
})

router.post("/",(req,res)=>{
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordHint:req.body.passwordHint
    })
    user.save()
    .then(
        users=>res.json(users)
    )
    .catch(
        err=>res.status(404).json({"something went wrong with post":err})
    )
})

router.put("/update",(req,res)=>{
    User.findById(req.body.id,(err,results)=>{
        console.log(err,results)
        results.passwordHint=req.body.passwordHint
        results.save((error)=>{
            if (error) throw error
            else{
                console.log("saved")
                res.end()
            }
        })
    })
})

module.exports = router;