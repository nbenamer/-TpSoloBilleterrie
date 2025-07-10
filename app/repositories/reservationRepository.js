const pool = require('../db');
const Reservation = require('../models/reservation');

async function createReservation(eventId, userId) {
  const [result] = await pool.execute(
    'INSERT INTO reservations (event_id, user_id) VALUES (?, ?)',
    [eventId, userId]
  );
  return new Reservation(result.insertId, eventId, userId, new Date());
}

async function getRemainingSeats(eventId) {
  const [total] = await pool.execute(
    'SELECT capacity FROM events WHERE id = ?', [eventId]);
  const [used] = await pool.execute(
    'SELECT COUNT(*) as count FROM reservations WHERE event_id = ?', [eventId]);
  return total[0].capacity - used[0].count;
}

module.exports = { createReservation, getRemainingSeats };