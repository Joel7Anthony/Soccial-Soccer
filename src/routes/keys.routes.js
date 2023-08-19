const express = require('express');
const router = express.Router();
const keysController = require('../controllers/users.controller');
const { isLoggedIn } = require('../lib/auth');

const profileController = require('../controllers/profiles.controller');

//views users
router.get('/', isLoggedIn, keysController.getKeys);
router.post('/user', isLoggedIn, keysController.postUsers);
router.get('/list-users', isLoggedIn, keysController.getListUsers );
router.get('/delete-users/:id',isLoggedIn, keysController.deleteUser);
router.get('/edit-users/:id',isLoggedIn, keysController.getUser);
router.post('/edit-users/:id',isLoggedIn, keysController.updateUser);

//views profile

router.get('/profile', isLoggedIn, profileController.getProfile);
router.post('/image-profile', isLoggedIn, profileController.postImageProfile);
router.post('/update-profile', isLoggedIn, profileController.updateImageProfile );




module.exports = router;

