const express = require('express');
const app = express();

const port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('My first node app!');
});

app.get('/stuff', (req, res) => {
    res.send('Testing routing...');
});

app.get('/thing', (req, res) => {
    res.send('Route testing #2');
});