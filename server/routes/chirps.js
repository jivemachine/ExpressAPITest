const express = require('express');
const chirpsStore = require('../chirpsstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    res.json(chirpsStore.UpdateChirp(id, req.body));
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    res.json(chirpsStore.DeleteChirp(id));
});

module.exports = router;