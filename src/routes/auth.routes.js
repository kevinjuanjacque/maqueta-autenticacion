const { Router } = require('express');
const router = Router();
const authController = require('../controller/auth');

router.post('/signup', authController.signUp);

router.post('/signin', authController.signIn);

router.get('/test', authController.test);

module.exports = router;
