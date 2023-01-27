// Import mongoose
const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		minLength: [3, "Name must be at least 3 characters"],
		require: [true, "Must provide Name"],
		unique: true
	},

	type: {
		type: String,
		minLength: [3, "Type must be at least 3 characters"],
		require: [true, "Must provide Type"]
	},

	description: {
		type: String,
		minLength: [3, "Description must be at least 3 characters"],
		require: [true, "Must provide Description"]
	},

	skill1: {
		type: String,
	},

	skill2: {
		type: String,
	},
	
	skill3: {
		type: String,
	}

}, {timestamps: true})

module.exports = mongoose.model("PetModel", PetSchema)