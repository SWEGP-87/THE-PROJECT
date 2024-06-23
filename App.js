const express = require('express');

const app = express();

PORT = 4000;

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile('./views/html/login.html', {root: __dirname});
});