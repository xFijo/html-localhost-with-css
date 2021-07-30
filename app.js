const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/main.html`);
});

app.listen(3000, () => {
  console.log('Online');
});
