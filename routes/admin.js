const express = require('express');
const logger = require('../logger');

const router = express.Router();


router.get('/dashboard', (req, res) => {
    res.render('dashboard'); // Render the dashboard.ejs file
});

// Route to serve the games page
router.get('/games', (req, res) => {
    const games = ['Game 1', 'Game 2', 'Game 3']; // Example data
    res.render('games', { games });
});

router.get('/starline_name', (req, res) => {
    res.render('starline_name'); // Render the starline_name.ejs file
});

// Route to serve the disawar name page
router.get('/disawar_name', (req, res) => {
    res.render('disawar_name'); // Render the disawar_name.ejs file
});

router.get('/week_pati', (req, res) => {
    res.render('week_pati'); // Render the week_pati.ejs file
});

router.get('/guess_post', (req, res) => {
    res.render('guess_post'); // Render the guess_post.ejs file
});

router.get('/notice', (req, res) => {
    res.render('notice'); // Render the notice.ejs file
});

router.get('/lucky_number', (req, res) => {
    res.render('lucky_number'); // Render the lucky_number.ejs file
});


// Route to serve the free game zone page
router.get('/free_game_zone', (req, res) => {
    res.render('free_game_zone'); // Render the free_game_zone.ejs file
});

// Route to serve the game result page
router.get('/game_result', (req, res) => {
    res.render('game_result'); // Render the game_result.ejs file
});

router.get('/users', (req, res) => {
    res.render('users'); // Render the users.ejs file
}); 

router.get('/admin_users', (req, res) => {
    res.render('admin_users'); // Render the admin_users.ejs file
});

router.get('/dpboss_chart', (req, res) => {
    res.render('dpboss_chart'); // Render the dpboss_chart.ejs file
});

router.get('/oldchart', (req, res) => {
    res.render('oldchart'); // Render the oldchart.ejs file
});

router.get('/contact', (req, res) => {
    res.render('contact'); // Render the contact.ejs file
});

router.get('/page_settings', (req, res) => {
    res.render('page_settings'); // Render the page_settings.ejs file
}); 

// Route to serve the market name page
router.get('/market_name', (req, res) => {
    res.render('market_name'); // Render the market_name.ejs file
});

 router.get('/seo', (req, res) => {
    res.render('seo'); // Render the seo.ejs file
}); 

router.get('/disclaim', (req, res) => {
    res.render('disclaim'); // Render the disclaim.ejs file
});  

router.get('/sms_settings', (req, res) => {
    res.render('sms_settings'); // Render the sms_settings.ejs file
});  

router.get('/back_resul', (req, res) => {
    res.render('back_resul'); // Render the back_result.ejs file
});

router.get('/result', (req, res) => {
    res.render('result'); // Render the result.ejs file
});
// Route to serve the week pati page
router.get('/index', (req, res) => {
    res.render('index'); // Render the index.ejs file
});
// Add more routes as needed for other admin pages

module.exports = router;