const service = require('../services/reservationService');

async function handleReservation(req, res) {
  const { eventId, userId } = req.body;
  try {
    const reservation = await service.reservePlace(eventId, userId);
    res.status(201).json({ success: true, reservation });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

module.exports = { handleReservation };