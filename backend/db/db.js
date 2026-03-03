const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...',err));
