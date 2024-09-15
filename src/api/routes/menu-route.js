const express = require('express');
const menuRouter = express.Router();
const {getMenu} = require("../controllers/item-controller")


menuRouter.post("/menu", getMenu);


module.exports = menuRouter;