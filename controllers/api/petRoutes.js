const router = require('express').Router();
const { Category, Pet } = require('../../models');
//const withAuth = require('../../utils/auth');

// POST new pet
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

// DELETE existing pet
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// --------------------------------------- //

// GET all pets
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Painting,
          attributes: ['name', 'color', 'found_date', 'size', 'status'],
        },
      ],
    });

    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('homepage', {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/pet/:id', withAuth, async (req, res) => {
  try {
    const dbPetData = await Pet.findByPk(req.params.id);

    const pet = dbPetData.get({ plain: true });

    res.render('pet', { pet, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});