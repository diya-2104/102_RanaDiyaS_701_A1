const express = require('express');
const app = express();

app.use(express.static('./public'));

// GET route "/gethello"
app.get('/gethello', (req, res) => {
  res.send('Hello NodeJS!!');
});

app.listen(8000, () => {
  console.log('server running at http://localhost:8000');
});