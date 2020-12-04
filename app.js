// Config env
require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const { Database } = require('./orm/database');



//Example connect MySQL start
// const optionsMySQL = {
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: '<enter yourdatabase here>'
// }
// const DB = new Database(optionsMySQL)
// DB.connect()
//Example connect MySQL end

//Example connect MongoDB start
var optionsMongoDB = {
	host: 'mongodb://localhost:27017/faq',
	type: 'mongo'
}
const DB = new Database()
DB.connect(optionsMongoDB)


const app = express();
const userRoute = require("./routes/user");
const questionRoute = require("./routes/question");

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/users", userRoute);
app.use("/question", questionRoute);

// Routes
app.get("/", (req, res, next) => {
	return res.status(200).json({
		message: "Server is OK!",
	});
});

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
	const err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// Error handler function
app.use((err, req, res, next) => {
	const error = app.get("env") === "development" ? err : {};
	const status = err.status || 500;

	// response to client
	return res.status(status).json({
		error: {
			message: error.message,
		},
	});
});

// Start the server
const port = app.get("port") || 8000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));