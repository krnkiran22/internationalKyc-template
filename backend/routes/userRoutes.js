const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Route to handle KYC form submission
router.post('/submit-kyc', async (req, res) => {
  const { first_name, last_name, dob, email, nationality, occupation, annual_income } = req.body;

  const newUser = new User({
    first_name,
    last_name,
    dob,
    email,
    nationality,
    occupation,
    annual_income,
  });

  try {
    await newUser.save();
    res.status(200).json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data!' });
  }
});

// Route to fetch user details
router.get('/user-profile', async (req, res) => {
  try {
    const user = await User.findOne(); // Fetches the first user (you can modify this logic)
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error fetching user data!' });
  }
});

module.exports = router;
