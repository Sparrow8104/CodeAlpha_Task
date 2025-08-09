const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const eventRoutes = require('./routes/eventRoutes');
app.use('/events', eventRoutes);


app.get('/', (req, res) => res.send('Event Registration System API running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
