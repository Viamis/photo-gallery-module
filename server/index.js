const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
