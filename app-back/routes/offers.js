var express = require('express');
var router = express.Router();
const Mongolib = require("../db/Mongolib");

/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.status(200).send(docs);
        })
    })
});

// POST oferta
router.post('/', function (req, res) {
    Mongolib.getDatabase( (db) => {
        const doc = req.body;
        Mongolib.insertOne(db, doc, result => {
            res.status(201).send(result);
        });
    })
})

module.exports = router;