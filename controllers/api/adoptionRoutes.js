const router = require('express').Router();
const path = require('path');
const { Category, Pet } = require('../../models');
const withAuth = require('../../utils/auth');



// GET one user
// '/category/:id' --> ejemplo del 19
router.get('/adoption/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the adoptions
    try {
      const adoptionData = await Adoption.findAll({
        where: {
          adopter_id: req.params.adopter_id,
        },
        include: [
          {
            model: Pet,
            attributes: [
              'name',
              'category',
              'found_date',
              'status',
              'cage',
              /// how to pull data from Adoption
            ],
          },
        ],
      });
      const adoptions = adoptionData.get({ plain: true });
      res.render('adoptions', { adoptions, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});