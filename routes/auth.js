const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const controller = require('../controller/controller')


router.post('/',controller.loginUser)
router.get('/',auth,controller.getUser)

module.exports = router;
