module.exports = app => {
    const countries = require("../controller/countries.controller.js");
    var router = require("express").Router();

    router.get("/", countries.findAll);
    router.get("/:id", countries.findOne);

    app.use('/api/countries', router);
};