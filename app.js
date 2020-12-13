// Config env
require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const path = require('path');
const app = express();
const fs = require("fs");

const userRoute = require("./routes/user");
const questionRoute = require("./routes/question");
const tagRoute = require("./routes/tag");

// Middlewares
const accessLogStream = fs.createWriteStream(
	path.join(__dirname, 'info.log'), { flags: 'a' }
);
morgan.token("timed", "A new :method request for :url was received. " + "It took :total-time[2] milliseconds to be resolved")
app.use(morgan('common', { stream: accessLogStream }));
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routes
app.use("/users", userRoute);
app.use("/question", questionRoute);
app.use("/tag", tagRoute);

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

app.use((req, res, next) => {
	logger.info(req.body);
	let oldSend = res.send;
	res.send = function (data) {
		logger.info(JSON.parse(data));
		oldSend.apply(res, arguments);
	}
	next();
})

// Start the server
const port = app.get("port") || 8000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`)
});