const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.redirect(301, 'https://mr3wes.xyz/');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
