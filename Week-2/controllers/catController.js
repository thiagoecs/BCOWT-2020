'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
    //console.log('catRoute: http get cat with path param', req.params)
    //res.send(`From this endpoint you can get cats with id ${req.params.id}.`);
    res.json(cats.filter(cat => cat.id === req.params.id).reduce(cat => cat));
}

const cat_create = (req,res) => {
    //here we will create a cat with data coming from req
    res.send(`cat created with id: ...`);
}   
module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create
};
