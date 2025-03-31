const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const userList = await User.find();

    if(!userList){
        res.status(500).json({success:false})
    }

    res.send(userList);
})

// GET a single user by id
router.get('/:id', async (req, res) => {
    const getUser = await User.findById(req.params.id);
  
    if(!getUser){
      res.status(500).json({
        success: false
      })
    }
  
    res.status(200).send(getUser);
  });
  
  // CREATE a new user
  router.post('/', async (req, res) => {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    
    user = await user.save();
  
    if(!user)
    return res.status(404).send('Err: cannot be created.')
  
    res.send(user);
  });

  // Login a user
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });

    // Check if the user exists and the password is correct
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Update the lastLogin field of the user document
    user.lastLogin = Date.now();
    await user.save();

    // Login successful
    return res.status(200).json({ message: 'Login successful' });
  });


  
  // UPDATE a user by id
  router.put('/:id', async (req, res) => {
    let user = await User.findByIdAndUpdate(
      req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }, {
        new: true
      })
    if(!user)
      return res.status(404). send('Err: cannot be created')
  
    res.send(user)
  })
  
  // DELETE a user by id
  router.delete('/:id', async (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
      if(user){
        return res.status(200).json({
          success: true,
          message: 'User is deleted'
        })
      }else{
        return res.status(404).json({
          success: false,
          message: 'User not found'
        })
      }
    }).catch(err => {
      return res.status(400).json({
        success: false,
        error: err
      })
    })
  })

module.exports = router;