const path = require('path');

const express = require('express');

const pigsController = require('../controllers/pigs');

const router = express.Router();

router.get('/', pigsController.getIndex);
module.exports = router;