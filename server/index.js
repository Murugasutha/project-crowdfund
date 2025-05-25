const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Import routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/campaign', require('./routes/campaign'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CrowdFunding Platform API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
