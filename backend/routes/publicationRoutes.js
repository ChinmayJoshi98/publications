const express = require('express');
const publicationRouter = express.Router();
const {
    addOne,
    getAll,
    delAll,
    updateOne,
    getById,
    delById
} = require('../controllers/publicationController');

publicationRouter.get('/', getAll);
publicationRouter.get('/:id', getById);
publicationRouter.post('/', addOne);
publicationRouter.delete('/', delAll);
publicationRouter.delete('/:id', delById);
publicationRouter.patch('/:id', updateOne);

module.exports = publicationRouter;