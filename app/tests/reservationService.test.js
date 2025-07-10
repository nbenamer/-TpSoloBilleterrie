const { reservePlace } = require('../services/reservationService');
const repo = require('../repositories/reservationRepository');
jest.mock('../repositories/reservationRepository');


test('réserve une place si disponible', async () => {
  repo.getRemainingSeats.mockResolvedValue(5);
  repo.createReservation.mockResolvedValue({ id: 1, eventId: 1, userId: 42 });

  const res = await reservePlace(1, 42);
  expect(res).toHaveProperty('id');
  expect(repo.createReservation).toHaveBeenCalled();
});

test('rejette la réservation si complet', async () => {
  repo.getRemainingSeats.mockResolvedValue(0);

  await expect(reservePlace(1, 42)).rejects.toThrow('Aucune place disponible.');
});
