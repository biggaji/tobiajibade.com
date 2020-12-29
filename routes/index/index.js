const router = require('express').Router();
const { index } = require("../../controller/index/indexController");

router.get('/', index);

module.exports = router;