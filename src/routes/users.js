const express = require('express')
const router = express.Router()

const User = require('../models/users')

router.post('/users', async(req, res) => {
    console.log(req.body);
    const userDetails = req.body
    const newuser = await User.query().insert({
        ...userDetails,
        created_at : new Date()
    })
    return res.send(newuser);
    

        
})

router.get('/',(req,res)=>{
    return res.send("Done!!")
})

module.exports = {
    router: router
}