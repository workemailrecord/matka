const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors'); // Import the cors package
const adminRoutes = require('./routes/admin'); // Import the admin routes
const logger = require('./logger'); // Import the logger

const app = express();
const PORT = process.env.PORT || 7000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Enable CORS for all routes
app.use(cors()); // Use CORS middleware

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use morgan for logging HTTP requests
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Use the admin routes
app.use('/admin', adminRoutes); // All admin routes will be prefixed with /admin

// Route to serve the dashboard EJS
app.get('/', (req, res) => {
    res.render('dashboard.ejs'); // Render the dashboard.ejs file
});

// Start the server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});