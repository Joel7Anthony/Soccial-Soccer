const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams.controller');


//viws teams
router.get('/', teamsController.getListTeams);
router.post('/team', teamsController.postTeams);



module.exports = router;