//importing stuff
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const publicationRouter = require('./routes/publicationRoutes');

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log("The current method: " + req.method);
    console.log("The current path: " + req.path);
    next();
})

app.use('/users', userRouter);
app.use('/publications', publicationRouter);

//connecting to the dB
mongoose.connect(process.env.MNG_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err.message)
    });
