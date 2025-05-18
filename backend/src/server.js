const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup'); // 👈 Add this
const accountRoutes = require('./routes/account');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/login', loginRoutes);
app.use('/api/signup', signupRoutes); // 👈 Add this line
app.use('/api/account', accountRoutes);

// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API' });
});

// Start server
app.listen(port, () => {
  console.log(` Server is running on port ${port}`);
});
