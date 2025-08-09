const express = require('express');
const { createShortUrl, redirectUrl } = require('../controllers/urlController');

const router = express.Router();

router.post('/shorten', createShortUrl);
router.get('/:code', redirectUrl);

module.exports = router;
