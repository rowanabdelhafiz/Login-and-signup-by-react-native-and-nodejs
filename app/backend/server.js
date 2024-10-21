// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const authRoutes = require('./routes/auth');

dotenv.config();  // Load .env variables

const app = express();

// Middleware to parse incoming requests with JSON
app.use(cors({ origin: ['http://localhost:8081', 'http://192.168.1.14:8081'], // Allow these origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
  credentials: true, // Allow cookies to be sent with requests
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);  // Auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
