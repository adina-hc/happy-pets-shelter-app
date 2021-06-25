const router = require('express').Router();
const { Category, Pet } = require('../models');
const fs= require('fs')
const fetch = require('node-fetch');

// GET all categories for homepage
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Pet,
          attributes: ['filename', 'name'],
        },
      ],
    });
    
    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render('homepage', {
      categories: categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
router.get('/category/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Pet,
            attributes: [
              'id',
              'name',
              'color',
              'found_date',
              'size',
              'status',
              'filename',              
            ],
          },
        ],
      });
      const category = dbCategoryData.get({ plain: true });
      res.render('category', { category: category, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one pet
router.get('/pet/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the painting
    try {
      const dbPetData = await Pet.findByPk(req.params.id);

      const pet = dbPetData.get({ plain: true });

      res.render('pet', { pet, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/admin-login', (req, res) => {
    res.render('admin-login');
});

router.get('/admin', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/admin-login');
  } else {
    res.render('enter-pet');
  }
});


router.post('/upload', (req, res) => {
  
  //Get last pet image
  async function saveImage(){
    try {
      const getLastPetImageName = await fetch('https://desolate-tundra-25750.herokuapp.com/api/pets', {
        method: 'GET'
      });
      const result=await getLastPetImageName.json()
      const filename=result[0].filename

      const file=fs.createWriteStream(`public/images/${filename}`)
      req.on('data',chunk=>{
        file.write(chunk)
      })

      req.on('end',()=>{
        file.end()
        res.send({
          ok:true
        })
      })

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  }
  saveImage()  

 });


module.exports = router;
