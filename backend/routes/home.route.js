const router = require("express").Router();

const homeController = require("../controllers/home.controller");

router.get("/home",homeController.getHome);

module.exports = router;
