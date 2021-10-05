const path = require('path');

const express = require('express');

const pigsController = require('../controllers/pigs');

const router = express.Router();

router.get('/', pigsController.getIndex);

router.get('/add-pig', pigsController.getAddPig);

router.post('/add-pig', pigsController.postAddPig);

module.exports = router;