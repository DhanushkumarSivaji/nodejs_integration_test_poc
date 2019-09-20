const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const controller = require('../controller/controller')

router.post('/',auth,controller.createContact);
router.get('/', auth, controller.getContacts);
router.put('/:id',auth,controller.updateContact)
router.delete('/:id',auth,controller.deleteContact)

module.exports = router;