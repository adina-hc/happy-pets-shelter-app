// const router = require('express').Router();
// const { User, Pet } = require('../models');
// const withAuth = require('../utils/auth');

// // This route displays 6 animals?
// // !!! Need to substitute this with animals info
// // We can use findAndCountAll: https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAndCountAll
// router.get('/', async (req, res) => {
//   try {
//     const petData = await Pet.findAll();
//     const pets = petData.map((pet) => pet.get({ plain: true }));
//     res.render('homepage', { 
//       pets, 
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       // Should this be included here to display the pets??
//       include: [{ model: Pet }],
//     });
//     const user = userData.get({ plain: true });
//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // The miniproject handles login and sign up as the same route / js file
// // LOGIN & SIGNUP
// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }
//   res.render('login');
// });

// module.exports = router;