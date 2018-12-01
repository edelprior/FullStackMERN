const express = require('express');
const router = express.Router();
//Item model
const Item = require('../../models/Item');
// @route GET api/items
// @description Get all Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({
      date: -1
    })
    .then(items => res.json(items))
});
// @route POST api/items
// @description create a post
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save()
    .then(item => res.json(item));
});
// @route DELETE api/items/:id
// @description delete an item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save()
    .then(item => res.json(item));
});
module.exports = router;