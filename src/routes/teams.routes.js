const express = require("express");
const router = express.Router();
const teamsController = require('../controllers/teams.controller');

router.get('/', teamsController.getListTeams);
router.post('/teams', teamsController.postTeam);
router.get('/list-teams', teamsController.getListTeams);
router.get('/delete-teams', teamsController.deleteTeam);
router.get('/edit-teams/:id', teamsController.getTeam);
router.post('/update-teams/:id', teamsController.updateTeam);

module.exports = router;
