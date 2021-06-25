const router = require('express').Router();
const { Pet } = require('../../models');

// CREATE new pet
router.post('/', async (req, res) => {
  try {
    const dbPetData = await Pet.create({
      name: req.body.name,
      color: req.body.color,
      size: req.body.size,
      found_date: req.body.found_date,
      status: req.body.status,
      category_id: req.body.category_id,      
      cage: req.body.cage, 
      filename: req.body.filename,
      user_id: req.body.user_id,  
      adoption_date: req.body.adoption_date,   
    });

      res.status(200).json(dbPetData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Get the last pet image name
router.get('/', async (req, res) => {
  try {
    const dbPetData = await Pet.findAll({
      attributes: ['filename'],
      limit: 1,
      order: [ [ 'id', 'DESC' ]]
});
    res.status(200).json(dbPetData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
