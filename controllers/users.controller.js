const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();

router.get('/', getUser);
router.post('/', postUser)

async function getUser(req, res, next) {
    try{
      const user = await User.findOne({})
      console.log("Inget"+user)
      res.send(user)

    } catch(err) {
      console.log(err)
    }
}

async function postUser(req , res) {

  const { firstName, lastName, username, email, address, city, country,postalCode,about} = req.body
  
  try{
  const updatedUser = await User.updateOne({},{
    firstName: firstName, 
    lastName:lastName, 
    username:username, 
    email:email,
    address:address, 
    city:city, 
    country:country,
    postalCode:postalCode,
    about:about
  })
  if(updatedUser) res.status(201).json({message:"userdata changed"})
  } catch(err) {
    console.log(err)
  }
}

module.exports = router;