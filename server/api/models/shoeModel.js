const mongoose = require('mongoose');

const ShoeSchema = mongoose.Schema(
	{
		id: mongoose.Schema.Types.ObjectId,
		shoeName: {
			type: String,
			required: true,
		},
		designer: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		shoeImage: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Shoe', ShoeSchema);
