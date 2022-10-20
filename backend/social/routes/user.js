const express=require('express')
const userRouter=express.Router()
const queries=require('../db2/db2queries.js');

userRouter.get('/',(req,res,next)=>{
      queries.getById(req.params.id).then(user=>{
        

        res.json(user)
        next()
      })
    
})
module.exports=userRouter
