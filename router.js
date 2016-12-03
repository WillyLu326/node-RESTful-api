/**
 * Created by zhenglu on 12/3/16.
 */

const express = require('express'),
    router = express.Router(),
    Emp = require('./models/emp');

module.exports = router;

// Create
router.post('/users', function(req, res) {
    const body = req.body;
    const emp = new Emp({
        name: body.name,
        address: {
            city: body.address.city,
            state: body.address.state
        },
        age: body.age
    });

    emp.save(function(err, emp) {
        if (err) {
            throw err;
        };
        res.json(emp);
    })
});

// Read
router.get('/users', function(req, res) {
    Emp.find({}, function(err, doc) {
        if (err) {
            throw err;
        }
        res.json(doc);
    })
});

// Find by one
router.get('/users/:name', function(req, res) {
    const name = req.params.name;
    Emp.findOne({name: name}, function(err, doc) {
        if (err) throw err;
        res.json(doc);
    });
});

// Update
router.put('/users/:name', function(req, res) {
    const name = req.params.name;
    console.log(name);
    Emp.findOne({name: name}, function(err, doc) {
        if (!doc) {
            return res.json('No User');
        }
        const body = req.body;
        console.log(body);
        doc.address.city = body.address.city;
        doc.address.state = body.address.state;
        doc.age = body.age;

        doc.save();
        res.json('Update');
    })
});

// Delete
router.delete('/users/:name', function(req, res) {
    const name = req.params.name;
    Emp.remove({ name: name }, function(err) {
        if (err) throw err;
        res.json('Delete');
    })
});


router.get('/seed', function(req, res) {
    var emp = new Emp({
        name: 'Willy Lu',
        address: {
            city: 'LA',
            state: 'CA'
        },
        age: 27
    });
    emp.save();
    res.end('Done');
});

