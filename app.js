// Config env
require('dotenv').config()

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const passport = require('passport')

//setup connect mongodb by mongoose
mongoose
	.connect(process.env.DATABASE_LOCAL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true
	})
	.then(() => console.log("✅ Connected database from mongodb."))
	.catch((error) =>
		console.error(`❌ Connect database is failed with error which is ${error}`)
	);

const app = express();


const userRoute = require("./routes/user");

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(passport.initialize()); //passport.initialize() middleware

// Routes
app.use("/users", userRoute);

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
