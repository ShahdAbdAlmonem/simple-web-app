const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple web app deployed via Jenkins.');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});