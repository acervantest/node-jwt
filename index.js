const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: 'API ENDPOINT REACHED!'
    });
});

app.post('/api/newpost', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message: 'Post created...',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
    //Mock user, in a real app you would go through auth and get a user back
    const user = {
        id: 1,
        username: 'john doe',
        email: 'john"email.com'
    }

    jwt.sign({user},'secretKey', (err, token) => {
        res.json({
            token
        });
    });
})

//this function verifies the presence of a token
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        //bearer <access_token> format
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));