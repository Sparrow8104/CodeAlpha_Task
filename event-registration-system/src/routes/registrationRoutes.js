const express = require('express');
const {
  registerForEvent,
  getUserRegistrations,
  cancelRegistration,
} = require('../controllers/registrationController');

const router = express.Router();

router.post('/', registerForEvent); 
router.get('/user/:userId', getUserRegistrations); 
router.patch('/cancel/:registrationId', cancelRegistration);

module.exports = router;
