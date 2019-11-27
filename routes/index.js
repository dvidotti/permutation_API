const express = require('express');
const router  = express.Router();
const service = require('../service/service.js')


router.get('/permutation-index/', (req, res, next) => {
  res.status(200).json({message: "You should write a word after permutation-index/ to get the index"});
  if(err) {
    res.status(500).json({error:"There was a error with your request"})
  }
});

/* GET PERMUTATION INDEX */
router.get('/permutation-index/:string', (req, res, next) => {
  const { string } = req.params
  const permIndex = service.getIdx(string);
  res.status(200).json({indexOfGivenPermutation: permIndex});
  if(err) {
    res.status(500).json({error:"There was a error with your request"});
  }
});



module.exports = router;
