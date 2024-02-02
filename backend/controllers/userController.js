const userModelNew = require('../models/userModelNew');

const addOne = async (req, res) => {
    try{
        let user = await userModelNew.create({...req.body});
        if(user){
            console.log(user);
             return res.status(200).json(user);
        }
        res.status(500).json(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

const getAll = async (req, res) => {
    try{
        let user = await userModelNew.find({}).sort({id: 1});
        if(user){
            console.log(user);
             return res.status(200).json(user);
        }
        res.status(404).json('No users found');
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

const delAll = async (req, res) => {
    try{
        let user = await userModelNew.deleteMany();
        if(user){
            console.log(user);
             return res.status(200).json(user);
        }
        res.status(404).json('No users exist');
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

module.exports = { addOne, getAll, delAll };