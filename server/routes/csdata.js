const router = require('express').Router();
const { Cs } = require('../model/Schema1');

router.get('/', async(req, res) => {
    return res.status(200).json(await Cs.find());
});

router.delete('/:id', async(req, res) => {
    await Cs.findByIdAndDelete(req.params.id);
    return res.status(200).json("deleted successful")
});

module.exports = router;