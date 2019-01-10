const express = require("express");
const ShoeRouter = express.Router();
// bring in shoes controller

// get all shoes
ShoeRouter.get("/shoes", (req, res, next) => {
	res.status(200).json({ message: "I can get all the shoes" });
});

// add a new shoe
ShoeRouter.post("/shoes", (req, res, next) => {
	res.status(200).json({ message: "post shoes" });
});

// display a single shoe
ShoeRouter.get("/shoes/:shoeID", (req, res, next) => {
	const id = req.params.shoeID;
	res.status(200).json({ message: "get single shoe" });
});

// update a shoe
ShoeRouter.put("/shoes/:shoeID", (req, res, next) => {
	const id = req.params.shoeID;
	res.status(200).json({ message: "update shoe" });
});

// delete a shoe
ShoeRouter.delete("/shoes/:shoeID", (req, res, next) => {
	const id = req.params.shoeID;
	res.status(200).json({ message: "delete shoe" });
});

module.exports = ShoeRouter;
