const Url = require('../models/Url');
const shortCode = require('../utils/shortCode');

exports.createShortUrl = async (req, res) => {
    const { originalUrl } = req.body;
    const code = shortCode();
    const newUrl = await Url.create({ originalUrl, shortCode: code });
    res.json({ shortUrl: `${process.env.BASE_URL}/${code}` });
};

exports.redirectUrl = async (req, res) => {
    const { code } = req.params;
    const url = await Url.findOne({ shortCode: code });
    if (url) {
        return res.redirect(url.originalUrl);
    } else {
        return res.status(404).json({ error: 'Not found' });
    }
};
