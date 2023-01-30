

const { get } = require("config")
const express = require("express")
const { register, login } = require("../controllers/user.controller")
const auth = require("../middlewares/auth")
const { registerRules,validator } = require("../middlewares/validator")
const router = express.Router()


router.post('/register',registerRules(),validator,register)
router.post('/login',login)
router.get('/getProfile',auth)


module.exports = router