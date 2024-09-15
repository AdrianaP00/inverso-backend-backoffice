const express = require('express');
const itemRouter = express.Router();

const {getItem} = require("../controllers/menu-controller")

itemRouter.get("/", getItem);


module.exports = itemRouter;