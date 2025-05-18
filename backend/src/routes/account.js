const express = require('express');
const router = express.Router();
const dbFunctions = require('../db/dbFunctions');
const authMiddleware = require('../utils/authMiddleware');


router.get('/', authMiddleware, async (req, res) => {
  try {

    const userId = req.user.id;


    const user = await dbFunctions.getUserById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    const { _id, email, name, createdAt } = user;
    res.json({
      id: _id,
      email,
      name,
      createdAt
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account', error: error.message });
  }
});

module.exports = router;
