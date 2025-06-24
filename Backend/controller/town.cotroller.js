const own = require('./../Models/town.model');

exports.createTown = async (req, res) => {
	try {
		const data = req.body;

		const user = await Town.create(data);

		res.status(201).json({ message: 'Successs in creating town' });
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: 'Failed to create town', error: err });
	}
};

exports.getTown = async (req, res) => {
	try {
		const townId = req.params.id;

		const town = await Town.find({ _id: townId });

		res.status(200).json({ message: 'Success', town });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get town', err });
	}
};

exports.getAllTowns = async (req, res) => {
	try {
		const towns = await Town.find().populate('owner');

		res
			.status(200)
			.json({ message: 'success', results: towns.length, towns });
	} catch (err) {
		res.status(500).json({ message: 'Failed to get all towns', err });
	}
};

exports.updateTown = async (req, res) => {
	try {
		const TownId = req.params.id;
		const data = req.body;

		const Town = await Town.findByIdAndUpdate(townId, data, { new: true });

		res.status(200).json({ message: 'success', town });
	} catch (err) {
		res.status(500).json({ message: 'Failed  to update town', err });
	}
};

exports.deleteTown = async (req, res) => {
	try {
		const townId = req.params.id;

		await Town.findByIdAndDelete(townId);

		res.status(204).json({ message: 'Deleted' });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Failed to delete town' });
	}
};