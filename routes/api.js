const router = require('express').Router();

router.get('/api/helloworld', (req, res) => {
  const obj = {
    foo: 'bar'
  };
  res.json(obj);
});

module.exports = router;
