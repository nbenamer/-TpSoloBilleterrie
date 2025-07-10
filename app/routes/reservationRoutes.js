const express = require('express');
const { handleReservation } = require('../controllers/reservationController');
const router = express.Router();

router.post('/reserve', handleReservation);

module.exports = router;