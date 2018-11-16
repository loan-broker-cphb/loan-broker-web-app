var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Loan Broker Application' })
});

router.get('/loanrequest', function(req, res, next) {
  // TODO:
  res.render('loanrequest')
});

router.get('/loanreply', function(req, res, next) {
  // TODO:
  res.render('loanreply')
});


module.exports = router;
