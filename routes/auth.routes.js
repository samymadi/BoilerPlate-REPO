const express = require('express');
const router = express.Router()
const { authLocalLogin, authJwtStrategy } = require("../middlewares/auth.middleware")
const { login, test } = require("../controllers/auth.controller")

router.post('/login', authLocalLogin, login)
// router.post('/register', authLocalLogin, login)
router.get('/test', authJwtStrategy, test)
// router.post('/logout', authLocalLogin, login)

module.exports = router
