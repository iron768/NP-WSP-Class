const express = require('express');
const app = express.Router();

app
    .get('/', (req, res) => {
        res.send( [
            {name: "CJ", age: 21},
            {name: "Leah", age: 48},
        ] )
    })
    .get('/test', (req, res) => {
        res.send({
            name: "Test User",
            age: 613
        })
    })

module.exports = app;