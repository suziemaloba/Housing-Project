const {
    createHouse,
    getHouse,
    getAllHouses,
    updateHouse,
} = require('./../controllers/House.controller');
const express = require('express');

const router = express.Router();

router.post('/', createHouse);
router.get('/', getAllHouses);
// router.delete('/', somthing)
router.get('/:id', getHouse);
router.patch('/:id', updateHouse);

// router.route('/').post(createHouse).get(getAllHouses).delete(somthing);
// router.route('/:id').get(getHouse).patch(updateHouse)

module.exports = router;