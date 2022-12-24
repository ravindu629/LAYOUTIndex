const express = require("express");
const router = express.Router();

const { addUser, validateUser } = require("../controllers/User.controller");

//REST API for users
//call relevant controller function according to the request type

router.post("/", addUser);

router.post("/validate", validateUser);

module.exports = router;
