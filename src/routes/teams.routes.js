const express = require("express");
const router = express.Router();
const teamsController = require('../controllers/teams.controller');
const { isLoggedIn } = require('../lib/auth');


router.get('/', isLoggedIn, teamsController.getListTeams);
router.get('/add', isLoggedIn, teamsController.getAddTeams);
router.post('/teams', isLoggedIn,teamsController.postTeam);
router.get('/list-teams', isLoggedIn,teamsController.getListTeams);
router.get('/delete-teams', isLoggedIn,teamsController.deleteTeam);
router.get('/edit-teams/:id', isLoggedIn,teamsController.getTeam);
router.post('/update-teams/:id', isLoggedIn,teamsController.updateTeam);

module.exports = router;
