const express = require('express');
// Import our db connection
const db = require('./db/connection');

// Import routes
const api_routes = require('./routes/api_routes');

const app = express();
const PORT = process.env.PORT || 3333;


// Middleware
app.use(express.json()); // Allows the client/browser to send json in a request
app.use(express.static('public')); // Allows the client/browser to access any folders or files in public - opens this folder at the root

// Load Routes
app.use('/', api_routes);

// Connect to the db and create all tables based off of our models
db.sync()
  .then(() => {
    // Start server
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
  });
