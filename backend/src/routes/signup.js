const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const dbFunctions = require('../db/dbFunctions');

const SALT_ROUNDS = 10;

router.post('/', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: 'Name, email, and password are required' });
    }

    // Check if user exists
    const existingUser = await dbFunctions.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create user
    const newUser = await dbFunctions.createUser({
      email,
      password: hashedPassword,
      name,
    });

    res
      .status(201)
      .json({ message: 'User created successfully', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ message: 'Signup failed', error: err.message });
  }
});

module.exports = router;
