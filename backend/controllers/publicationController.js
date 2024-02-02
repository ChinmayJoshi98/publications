const publicationModel = require('../models/publicationModel');
const userModelNew = require('../models/userModelNew');

const addOne = async (req, res) => {
    const { student_id } = req.body;
    let userExists = await userModelNew.exists({id: student_id});
    if(userExists){
        try{
            let pub = await publicationModel.create({...req.body});
            if(pub){
                console.log(pub);
                 return res.status(200).json(pub);
            }
            res.status(500).json(pub);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("Publication doesn't exist");
        res.status(404).json("No publication found");
    }
}

const getAll = async (req, res) => {
    try{
        let pub = await publicationModel.find({}).sort({createdAt: -1});
        if(pub){
            console.log(pub);
             return res.status(200).json(pub);
        }
        res.status(404).json('No publications found');
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

const delAll = async (req, res) => {
    try{
        let pub = await publicationModel.deleteMany();
        if(pub){
            console.log(pub);
             return res.status(200).json(pub);
        }
        res.status(404).json('No publications exist');
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

const updateOne = async (req, res) => {
    // const { student_id } = req.body;
     const { id } = req.params;
    // let userExists = await userModelNew.exists({id: student_id});
    try{
        let pub = await publicationModel.findOneAndUpdate({id: id},{...req.body},{new: true});
        if(pub){
            console.log(pub);
                return res.status(200).json(pub);
        }
        res.status(500).json(pub);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

const getById = async (req, res) => {
    const { id } = req.params;
    //console.log('student id is' + id);
    let userExists = await userModelNew.exists({id: id});
    if(userExists){
        try{
            let pub = await publicationModel.find({student_id: id});
            if(pub){
                console.log(pub);
                 return res.status(200).json(pub);
            }
            res.status(500).json(pub);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("User doesn't exist");
        res.status(404).json("No user with this ID found!");
    }
}

const delById = async (req, res) => {
    // const { student_id } = req.body;
     const { id } = req.params;
    // let userExists = await userModelNew.exists({id: student_id});
    try{
        let pub = await publicationModel.findOneAndDelete({id: id});
        if(pub){
            console.log(pub);
                return res.status(200).json(pub);
        }
        res.status(500).json(pub);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

module.exports = { addOne, getAll, delAll, updateOne, getById, delById };