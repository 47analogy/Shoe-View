const express = require("express");
const ShoeRouter = express.Router();
// bring in shoes controller

// get all shoes
ShoeRouter.get("/shoes", (req, res, next) => {
	res.status(200).json({ message: "I can get all the shoes" });
});

module.exports = ShoeRouter;
