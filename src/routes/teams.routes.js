const express = require("express");
const router = express.Router();
const teamsController = require('../controllers/teams.controller');
const { isLoggedIn } = require('../lib/auth');


router.get('/', isLoggedIn, teamsController.getListTeams);
router.post('/teams', isLoggedIn,teamsController.postTeam);
router.get('/add', isLoggedIn, teamsController.getAddTeams);
router.get('/list-teams', isLoggedIn,teamsController.getListTeams);
router.get('/delete-teams/:id', isLoggedIn,teamsController.deleteTeam);
router.get('/edit-teams/:id', isLoggedIn,teamsController.getTeam);
router.post('/edit-teams/:id', isLoggedIn,teamsController.updateTeam);

//views profile

//router.get('/profile', isLoggedIn, profileController.getProfile);
//router.post('/image-profile', isLoggedIn, profileController.postImageProfile);
//router.post('/update-profile', isLoggedIn, profileController.updateImageProfile );


module.exports = router;
