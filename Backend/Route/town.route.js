const {
    createTown,
    getTown,
    getAllTowns,
    updateTown,
} = require('./../controllers/Town.controller');
const express = require('express');

const router = express.Router();

router.post('/', createTown);
router.get('/', getAllTowns);
// router.delete('/', somthing)
router.get('/:id', getTown);
router.patch('/:id', updateTown);

// router.route('/').post(createTown).get(getAllTowns).delete(somthing);
// router.route('/:id').get(getTown).patch(updateTown)

module.exports = router;