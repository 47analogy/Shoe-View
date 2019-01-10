const express = require("express");
const UserRouter = express.Router();
// bring in users controller

// get all users
UserRouter.get("/users", (req, res, next) => {
	res.status(200).json({ message: "I can get all the users" });
});

// add a user
UserRouter.post("/users", (req, res, next) => {
	res.status(200).json({ message: "post users" });
});

// display a single user
UserRouter.get("/users/:UsersID", (req, res, next) => {
	const id = req.params.userID;
	res.status(200).json({ message: "get single user" });
});

// update a user
UserRouter.put("/users/:userID", (req, res, next) => {
	const id = req.params.userID;
	res.status(200).json({ message: "update user" });
});

// delete a user
UserRouter.put("/users/:userID", (req, res, next) => {
	const id = req.params.userID;
	res.status(200).json({ message: "delete user" });
});

module.exports = UserRouter;
