const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newPet = await Pet.create({
        ...req.body,
        user_id: req.session.user_id,
        // Some type of additional permission/role (i.e. employee)
      });
      res.status(200).json(newPet);
    } catch (err) {
      res.status(400).json(err);
    }
});