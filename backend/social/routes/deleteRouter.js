const express = require('express');
const deleteRouter = express.Router();
const queries = require('../db2/db2queries.js');
deleteRouter.delete('/', (req, res) => {
    queries.deleteUser(req.params.id).then(() => {
        res.json({
            deleted:true});
    })
});
module.exports = deleteRouter;