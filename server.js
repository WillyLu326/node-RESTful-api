//noinspection JSUnresolvedFunction
/**
 * Created by zhenglu on 12/3/16.
 */

const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    app = express()
//noinspection JSUnresolvedVariable,JSUnresolvedFunction
    router = require('./router');

mongoose.connect('mongodb://willylu:willylu@ds119718.mlab.com:19718/emp-db');
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

app.use('', router);

// 404 Error
app.get('*', function(req, res) {
    res.send('error');
})

app.listen(3000, function() {
    console.log('server is started');
});