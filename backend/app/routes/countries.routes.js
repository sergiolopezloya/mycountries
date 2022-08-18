module.exports = app => {
    const countries = require("../controller/countries.controller.js");
    var router = require("express").Router();

    router.get("/", countries.findAll);
    router.get("/:id", countries.findOne);

    router.post("/addtofavorites", countries.addtofavorites);

    app.use('/api/countries', router);
};