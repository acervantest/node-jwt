const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'API ENDPOINT REACHED!'
    });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port${PORT}`));