const House = require('./../Models/house.model');

exports.createHouse = async (req, res) => {
	try {
		const data = req.body;

		const user = await House.create(data);

		res.status(201).json({ message: 'Successs in creating house' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed to create house', error: err });
	}
};

exports.getHouse = async (req, res) => {
	try {
		const HouseId = req.params.id;

		const store = await House.find({ _id: HouseId });

		res.status(200).json({ message: 'Success', House });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get house', err });
	}
};

exports.getAllHouses = async (req, res) => {
	try {
		const stores = await House.find().populate('owner');

		res
			.status(200)
			.json({ message: 'success', results: houses.length, houses });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get all houses', err });
	}
};

exports.updateHouses = async (req, res) => {
	try {
		const houseId = req.params.id;
		const data = req.body;

		const house = await house.findByIdAndUpdate(houseId, data, { new: true });

		res.status(200).json({ message: 'success', house});
	} catch (err) {
		res.status(500).json({ message: 'Failed  to update house', err });
	}
};

exports.deleteHouse = async (req, res) => {
	try {
		const houseId = req.params.id;

		await House.findByIdAndDelete(houseId);

		res.status(204).json({ message: 'Deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ messageb: 'Failed to delete house' });
	}
};