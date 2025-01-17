const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize express
const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // Enable Cross-Origin Request Sharing

// MongoDB connection URL
const mongoURI = 'mongodb+srv://kirandev2210:kyc123@amlkyc.r0zb7.mongodb.net/?retryWrites=true&w=majority&appName=amlkyc';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define the User schema
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  dob: String,
  email: String,
  nationality: String,
  occupation: String,
  annual_income: Number,
});

// Create a model for the user
const User = mongoose.model('User', userSchema);

// Route to handle KYC form submission
app.post('/submit-kyc', async (req, res) => {
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
app.get('/user-profile', async (req, res) => {
  try {
    const user = await User.findOne(); // Fetches the first user (you can modify this logic)
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error fetching user data!' });
  }
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
