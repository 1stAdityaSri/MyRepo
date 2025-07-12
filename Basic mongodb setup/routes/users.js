const express = require('express');
const router = express.Router();

const User= require('../Models/models');

router.get('/users', async (req, res) => {
    try {
        console.log("Received request for GET method");
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: 'Server Error'
        });
    }
});


router.post('/users',async(req,res)=>{
    console.log("Received requested for POST method")
    try{
        const{ name,age,weight}=req.body;
        const newUser = new User({name,age,weight});
        await newUser.save();
        res.status(200).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
})

router.put('/users/:id', async(req,res)=>{
    const {id} = req.params;
    const {name, age, weight} = req.body;

    try{
        const updatedUser= await User.findByIdAndUpdate(id,{name, age, weight});

        if(!updatedUser){
          res.json({
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true,
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
})


router.delete('/users/:id', async(req,res)=>{
    const {id} = req.params;

    try{
        const deletedUser = await User.findByIdAndDelete(id);

        if(!deletedUser){
            res.json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
});

module.exports = router;