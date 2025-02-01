/*const express = require('express');
const {addNumbers, homePage, loginUser } = require("../controllers/example")

const router = express.Router();

router.post('/add', addNumbers)
router.post('/homepage' , homePage)
router.post('/login' , loginUser)

module.exports = router*/

const express = require('express');

const {calculator, student, credentials } = require("../controllers/example")

const router = express.Router();

router.post('/calculate' , calculator)
router.post('/dear' ,student)
router.post('/inform' , credentials)


module.exports = router;