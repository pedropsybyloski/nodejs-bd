const {Router} = require('express');
const pageController = require('../controller/pageController');

const route = Router();

route.get("/", pageController.home);

module.exports = route;