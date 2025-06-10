// server.js (example using Express)
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Jeff the Shark\'s Activity!</h1><p>This is the main entry point for the iframe.</p>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});