const express = require("express")

const router = express.Router()

const {getPrivateData} = require("../controllers/private")

router.route("/").get(getPrivateData);

module.exports = router;