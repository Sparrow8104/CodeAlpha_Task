const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('URL Shortener API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const connectDB = require('./config/index');
connectDB();

