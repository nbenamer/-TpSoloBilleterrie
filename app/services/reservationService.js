const repo = require('../repositories/reservationRepository');

async function reservePlace(eventId, userId) {
  const remaining = await repo.getRemainingSeats(eventId);
  if (remaining <= 0) throw new Error('Aucune place disponible.');
  return await repo.createReservation(eventId, userId);
}

module.exports = { reservePlace };
