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

router.post('/voltooid.html', (req, res) => {
    const newObj = {
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        chair: req.body.radio,
    }
    db.insert({
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        chair: req.body.radio,
    });

    res.redirect('voltooid.html?date=' + req.body.date + '&time=' + req.body.time + '&chair=' + req.body.radio);
})

router.get('/api/getdb/:date&:time&:chair', (req, res) => {
    var date = req.params.date;
    var time = req.params.time;
    var chair = req.params.chair;
    console.log(date, time, chair);
    res.json({ date, time, chair })
})

router.get('/api/getdb2/', (req, res) => {
    db.find().make(function(filter) {
        filter.callback(function(err, response) {
            res.json({ response })
        });
    });
})


module.exports = router;