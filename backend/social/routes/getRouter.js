const express = require('express');
const getRouter = express.Router();
const queries = require('../db2/db2queries.js');
getRouter.get('/', (req, res) => {
    queries.getAll('User_Profile').then(users => {
        res.json(users);
    })
});
module.exports = getRouter;