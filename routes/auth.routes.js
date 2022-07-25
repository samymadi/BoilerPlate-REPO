const express = require('express');
const router = express.Router()
const { authLocalLogin } = require("../middlewares/auth.middleware")


router.post('/login', authLocalLogin, (req, res) => {

    res.status(212).send(res.locals.data);
})

module.exports = router
