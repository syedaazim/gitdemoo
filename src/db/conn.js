const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userDB', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the database');

    })
    .catch((err) => {
        console.log(err);

    });