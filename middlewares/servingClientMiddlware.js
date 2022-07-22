const path = require('path');
const express = require('express');


const CLIENT_FOLDER_PATH = path.resolve(__dirname,'../build');


console.log('path',CLIENT_FOLDER_PATH);


module.exports = express.static(CLIENT_FOLDER_PATH);