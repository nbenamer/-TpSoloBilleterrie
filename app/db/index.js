const mysql = require('mysql2/promise');

const hosts = ['mariadb1', 'mariadb2', 'mariadb3'];

async function connectToAvailableHost() {
  for (const host of hosts) {
    try {
      const pool = mysql.createPool({
        host,
        user: 'root',
        password: 'password',
        database: 'reservation_db',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });

      // Test de connexion immédiat
      await pool.query('SELECT 1');
      console.log(`✅ Connexion réussie avec ${host}`);
      return pool;
    } catch (err) {
      console.warn(`⚠️ ${host} est indisponible : ${err.code || err.message}`);
    }
  }

  throw new Error('❌ Aucun hôte MariaDB disponible.');
}


module.exports = connectToAvailableHost();
