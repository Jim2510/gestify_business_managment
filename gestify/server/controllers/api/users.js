const User = require("../../db/models/User");
const jwt=require('jsonwebtoken')
const passport = require('passport');
const login = async (req, res) => {
    try {
      const { userName,password } = req.body;
      const user = await User.findOne({userName});

      if(user&&user.password===password){
        const payload = {
            id:user.id,
            userName
        }
        const { SECRET = '' } = process.env
        const token=jwt.sign(payload,SECRET)
       res.status(200).json(user); 
      }else {
        res.status(404).json({message:'User not found'})
      }
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const signUp = async (req, res) => {
    try {
        if (req.body.userName) {
            res.status(400).json({ msg: 'Username already in use' })
        } else {
            const user = await User.create(req.body)
            res.status(201).json({ msg: 'User created successfully ' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
   
}