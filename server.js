
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/login', (req, res) => {
    res.send(req.body)
    console.log('its working', req.body);
});

app.post('/signup', (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    res.send(req.body, hash)
});

app.listen(port, () => console.log(`connected to Node Server on PORT ${port}`));
