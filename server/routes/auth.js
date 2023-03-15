const express = require('express')

const router = express.Router()

const {register, login, forgetpassword, resetpassword} = require('../controllers/auth')

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/forgotpassword").post(forgetpassword);

router.route("/resetpassword/:resetToken").post(resetpassword)

module.exports = router;