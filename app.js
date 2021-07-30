const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/main.html`);
});

app.get('/css', (req, res) => {
    res.sendFile(`${__dirname}/style.css`);
});

app.listen(3000, () => {
  console.log('Online');
});
