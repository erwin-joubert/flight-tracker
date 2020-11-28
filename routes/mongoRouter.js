const express = require('express');
const router = express();

const mongoController = require('../controllers/mongoController');
const {
    mongo
} = require('mongoose');

// Set default API response
router.get('/test', function (req, res) {
    res.json({
        status: 'API is working',
        message: '/mongo to view stuff',
    });
});

// routes
router.route('/')
    .get(mongoController.viewall)
    .post(mongoController.new)
    .delete(mongoController.deleteAll);
router.route('/:id')
    .get(mongoController.viewid)
    .delete(mongoController.delete)
module.exports = router;