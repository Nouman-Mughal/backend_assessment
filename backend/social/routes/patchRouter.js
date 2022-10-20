const express = require('express');
const patchRouter = express.Router();
const queries = require('../db2/db2queries.js');
patchRouter.patch('/', (req, res,next) => {
    queries.updateUser(req.params.id,req.body).then(users => {
        res.json(users[0]);
        next()
    })
});
module.exports = patchRouter;