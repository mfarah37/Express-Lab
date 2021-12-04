var express = require('express');
const { route } = require('.');
var router = express.Router();

//Require the Controller that exports Skills CRUD function
var skillsCtrl = require('../controllers/skills')

//GET /skills
router.get('/', skillsCtrl.index) 
router.get('/:id', skillsCtrl.show)

module.exports = router;
