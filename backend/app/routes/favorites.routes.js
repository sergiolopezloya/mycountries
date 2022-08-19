module.exports = app => {
    const favorites = require("../controller/favorites.controller.js");
    var router = require("express").Router();

    router.get("/", favorites.findAll);
    router.post("/create", favorites.create);

    app.use('/api/favorites', router);
};