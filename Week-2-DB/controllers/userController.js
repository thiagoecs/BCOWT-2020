'use strict';

const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  res.json(users);
};

const user_get_by_id = async (req, res) => {
    const user = await userModel.getUser(req.params.id);
    res.json(user);
};

const user_create = async (req,res) => {
    console.log('userController user_create', req.body, req.file);
    const id = await userModel.insertUser(req);
    const user = await userModel.getUser(id);
    res.send(user);
};

const user_update = async (req, res) => {
  const updateOk = await userModel.updateUser(req.params.id, req);
  res.send(`updated... ${updateOk}`);
}

const user_delete = async (req, res) => {
  const deleteOk = await userModel.deleteUser(req.params.id, req);
  res.send(`deleted... ${deleteOk}`);
}

module.exports = {
  user_list_get,
  user_get_by_id,
  user_create,
  user_update,
  user_delete
};
