const express = require('express');
const userRouter = express.Router();
const {
    addOne,
    getAll,
    delAll
} = require('../controllers/userController');

userRouter.get('/', getAll);
userRouter.post('/', addOne);
userRouter.delete('/', delAll);

module.exports = userRouter;