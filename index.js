const express = require('express');
require('./src/db/conn');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hello world');
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

});