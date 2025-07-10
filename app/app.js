const express = require('express');
const path = require('path');
const app = express();
const reservationRoutes = require('./routes/reservationRoutes');

app.use(express.json());
app.use('/api', reservationRoutes);
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3021;
app.listen(PORT, () => {
  console.log(`✅ Backend lancé sur http://localhost:${PORT}`);
});
