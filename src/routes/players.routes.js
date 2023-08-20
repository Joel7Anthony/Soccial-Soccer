const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players.controller');


//viws players
router.get('/', playersController.getListPlayers);
router.get('/add', playersController.getAddPlayers);
router.post('/players', playersController.postPlayer);
router.get('/list-players', playersController.getListPlayers);
router.get('/delete-players', playersController.deletePlayer);
router.get('/edit-players/:id', playersController.getPlayer);
router.post('/update-players/:id', playersController.updatePlayer);

module.exports = router;