const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const app = express();
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contact')
const config = require('config');
const dev_db = config.get('mongoURI');
const test_db = config.get('mongoTestUri');
let env = process.env.NODE_ENV  ;


if(env==='development'){
    connectDB(dev_db);
}else{
    connectDB(test_db);
}
app.use(cors()) 


// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact',contactRoutes)




module.exports = app;
