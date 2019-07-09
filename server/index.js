const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');

app.use(express.static(__dirname));
app.use(morgan('dev'));

app.listen(3000, () => {
    console.log('Success');
})