const express = require('express');
const postRouter = express.Router();
const queries = require('../db2/db2queries.js');
postRouter.post('/', (req, res, next) => {
    queries.insertUser(req.body).then(users => {
        res.json(users[0]);
        next()
    })
});
module.exports = postRouter;