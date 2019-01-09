const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const server = express();

const port = process.env.Port || 5000;

//import routes
const userRoutes = require("./api/routes/users");
const shoeRoutes = require("./api/routes/shoes");

server.use(morgan("dev"));

// parse requests
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// test route
server.get("/", (req, res, next) => {
	res.status(200).json({ api: "I can hear you Watson" });
});

server.use("/api", userRoutes);
server.use("/api", shoeRoutes);

// listen on port
server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
