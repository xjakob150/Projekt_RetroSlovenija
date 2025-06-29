const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;

const JWT_SECRET = 'your_jwt_secret';

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(bodyParser.json());



app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    if (results.length === 0) return res.status(401).json({ message: 'Incorrect username or password' });

    const user = results[0];
    console.log(password);
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) return res.status(401).json({ message: 'Incorrect username or password' });

    const token = jwt.sign(
      { userId: user.user_id, username: user.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', userId: user.user_id });
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out' });
  });
});

app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)';

    db.query(sql, [username, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Server error' });
      }

      res.status(201).json({ message: 'Registracija je uspešna' });
    });

  } catch (error) {
    console.error('Hashing error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

app.get('/api/games', (req, res) => {
  const sql = 'SELECT * FROM games';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching games:', err);
      return res.status(500).json({ error: 'Failed to retrieve games' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
