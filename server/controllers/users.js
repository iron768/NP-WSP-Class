const users = require('../models/users');
const express = require('express');
const app = express.Router();

app
    .get('/', (req, res) => {
        const all = users.getUsers();

        res.send(all);
    })
    .get('/search', (req, res) => {
        const search = req.query.q;
        const result = users.search(search);

        res.send(result)
    })
    .get('/:id', (req, res) => {
        const id = req.params.id
        const testUser = users.get(id);

        res.send(testUser);
    })

module.exports = app;