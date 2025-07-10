class Reservation {
  constructor(id, eventId, userId, timestamp) {
    this.id = id;
    this.eventId = eventId;
    this.userId = userId;
    this.timestamp = timestamp;
  }
}
module.exports = Reservation;