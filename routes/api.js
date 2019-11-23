const router = require('express').Router();
var NoSQL = require('nosql');
var db = NoSQL.load('./local.db.nosql');

router.get('/api/helloworld', (req, res) => {
    const obj = {
        foo: 'bar'
    };
    res.json(obj);
});

router.post('/api/test', (req, res) => {
    console.log(req.body)
    const newObj = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    res.json(newObj)
    db.insert({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });
})

router.post('/api/reserveren', (req, res) => {
    const newObj = {
        date: req.body.date,
        time: req.body.time,
        radio: req.body.radio
    }
    res.json(newObj)
    db.insert({
        date: req.body.date,
        time: req.body.time
    });
})


module.exports = router;