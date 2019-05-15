const express = require('express');
const router = express.Router();

const { RootController } = require('../controllers/root-controller');

router.get('/', RootController);

exports.router = router
