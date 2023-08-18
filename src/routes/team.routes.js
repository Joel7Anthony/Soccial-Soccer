const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams.controller');


//viws teams
router.get('/', teamsController.getListTeams);
router.post('/team', teamsController.postTeams);
router.get('/list-teams', teamsController.getListTeams);
router.get('delete-teams/:id', teamsController.deleteTeams);
router.get('/edit-teams/:id', teamsController.getTeams);
router.post('/edit-teams/:id',teamsController.updateUser);

module.exports = router;