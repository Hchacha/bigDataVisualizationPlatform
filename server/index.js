const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
//app.use(bodyParser.json);
//app.use(bodyParser.urlencoded({extended: false}));
//app.use('/',userApi);
app.use(express.static('./dist'));
app.listen(80,function(){
    console.log('run is success');
});
 
