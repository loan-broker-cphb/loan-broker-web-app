let express = require('express');
let router = express.Router();
let ctrl = require('../controller/backend_ctrl')


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index')
});

router.get('/loanrequest', function(req, res) {
  res.render('loanrequest')
});

router.post('/loanrequest', async function(req, res) {
  let loan = req.body
  let result = await ctrl.sendLoanRequest(loan)
  if (result.statusCode == 200) {
    res.render('index', {
      'message': `The loan request from "ssn: ${req.body.ssn}"" has been processed. See "Loan Result" for status.`,
      'ssn': req.body.ssn
    })
  } else if (result.statusCode == 400) {
    res.render('error', {
      'message': 'Invalid SSN'
    })
  }

});


router.get('/loanreply/:ssn', async function(req, res, next) {
  let ssn = req.params.ssn
  let result = await ctrl.getLoanReply(ssn)
  if (result.statusCode == 200) {
    res.render('loanreply', {
      'reply': result.data
    })
  } else if (result.statusCode == 400) {
    res.render('error', {
      'message': 'Invalid SSN'
    })
  }
});

router.get('/search/loanreply', async function(req, res){
  res.render('findloan')
})

router.post('/search/loanreply', async function(req, res) {
  let result = await ctrl.getLoanReply(req.body.ssn)
  if (result.statusCode == 200) {
    res.render('loanreply', {
      'reply': result.data
    })
  } else if (result.statusCode == 400) {
    res.render('findloan', {
      'message': 'Invalid SSN'
    })
  }

});


module.exports = router;
