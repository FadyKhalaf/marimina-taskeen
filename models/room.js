const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema(
	{
		roomMates: [String],
	},

	{
		timestamps: true,
	}
);

// create the model based on the above schema
const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
