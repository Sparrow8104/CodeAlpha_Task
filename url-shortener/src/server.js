const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/index');
const urlRoutes = require('./routes/urlRoutes');

dotenv.config();
connectDB();

const app = express();


app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => res.send('Test route working'));

app.get('/', (req, res) => {
    res.send('URL Shortener API is running');
});


app.use('/', urlRoutes); 


// app.use(express.static('src/public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
