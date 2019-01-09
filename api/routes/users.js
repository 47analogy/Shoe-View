const express = require("express");
const UserRouter = express.Router();
// bring in users controller

// get all users
UserRouter.get("/users", (req, res, next) => {
	res.status(200).json({ message: "I can get all the users" });
});

module.exports = UserRouter;
