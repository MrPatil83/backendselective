const express = require('express');
const { handelPostData } = require('../Controllers/user');

const router = express.Router();

// This route is now accessible at http://localhost:3001/contact
router.post('/contact', handelPostData);

module.exports = router;
