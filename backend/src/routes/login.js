const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Secret key for JWT (use env variable in production)
const JWT_SECRET = process.env.JWT_SECRET;
// Login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    // 2. Check user exists
    const user = await dbFunctions.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3. Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 4. Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // 5. Send response
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error during login', error: error.message });
  }
});

module.exports = router;
