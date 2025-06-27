const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 5000;

app.use(cors());
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

    res.json({ message: 'Login successful', userId: user.user_id });
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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
