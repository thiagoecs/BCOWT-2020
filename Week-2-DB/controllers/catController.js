'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get_by_id = async (req, res) => {
    //console.log('catRoute: http get cat with path param', req.params)
    //res.send(`From this endpoint you can get cats with id ${req.params.id}.`);
    const cat = await catModel.getCat(req.params.id);
    res.json(cat);
};

const cat_create = async (req,res) => {
    //here we will create a cat with data coming from req
    console.log('catController cat_create', req.body, req.file);
    const id = await catModel.insertCat(req);
    const cat = await catModel.getCat(id);
    res.send(cat);
};

const cat_update = async (req, res) => {
  const updateOk = await catModel.updateCat(req.params.id, req);
  res.send(`updated... ${updateOk}`);
}

const cat_delete = async (req, res) => {
  const deleteOk = await catModel.deleteCat(req.params.id, req);
  res.send(`deleted... ${deleteOk}`);
}

module.exports = {
  cat_list_get,
  cat_get_by_id,
  cat_create,
  cat_update,
  cat_delete
};
