const express = require('express');
const {addNumbers, homePage, loginUser } = require("../controllers/example")

const router = express.Router();

router.post('/add', addNumbers)
router.post('/homepage' , homePage)
router.post('/login' , loginUser)

module.exports = router