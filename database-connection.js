const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.connection_string;

exports.connectDB = async () => {
	try {
		await mongoose.connect(uri);
		console.log("db is connected successfully");
	} catch (err) {
		console.log(err);
	}
};
