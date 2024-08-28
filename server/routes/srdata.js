const router = require('express').Router();
const { Srrr } = require('../model/Schemaa');

router.get('/', async(req, res) => {
    return res.status(200).json(await Srrr.find());
});

router.delete('/:id', async(req, res) => {
    await Srrr.findByIdAndDelete(req.params.id);
    return res.status(200).json("deleted successful")
});

module.exports = router;