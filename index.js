const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'API ENDPOINT REACHED!'
    });
});

app.post('/api/newpost', (req, res) => {
    res.json({
        message: 'Post created...'
    });
});

app.post('/api/login', (req, res) => {
    //Mock user, in a real app you would go through auth and get a user back
    const user = {
        id: 1,
        username: 'john doe',
        email: 'john"email.com'
    }

    jwt.sign({user},'secretkey', (err, token) => {
        res.json({
            token
        });
    });
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));