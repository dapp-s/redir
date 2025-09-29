const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.redirect(301, 'https://www.new-website.com');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
