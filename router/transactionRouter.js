const express = require('express')
const router = express.Router()
const transController = require('../controllers/tanscation')

router.get("/last_6_month_tran", transController.last_six_month_trans)

module.exports = router