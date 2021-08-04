const express = require('express')
const router = express.Router()
const me = require('..//app/controller/MeController')
const account = require('..//app/controller/LoginController')
router.get('/me/getNotification', me.getNotification)
router.get('/account/search', account.searchUser)
router.get('/me/getroom', me.getroom)
module.exports = router