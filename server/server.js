// server.js
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
require('./config/mongoose.config');
const contactRoutes = require('./routes/contact.routes'); // Require the contact routes

const port = process.env.PORT || 8000;
const frontEndDomain = process.env.FRONTEND_DOMAIN;

// Middleware
app.use(cors(), express.json({ limit: '50mb' }), express.urlencoded({ limit: '50mb', extended: true }));

// Use the contact routes
app.use('/api', contactRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
