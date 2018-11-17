let express = require('express');
let router = express.Router();
let ctrl = require('../controller/backend_ctrl')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/loanrequest', function(req, res, next) {
  res.render('loanrequest')
});

router.post('/loanrequest', async function(req, res, next) {
  let loan = req.body
  let result = await ctrl.sendLoanRequest(loan)
  if (result.statusCode == 200) {
    res.render('index', {
      'message': `The loan request from "ssn: ${req.body.ssn}"" has been processed. See "Loan Result" for status.`,
      'ssn': req.body.ssn
    })
  }
});


router.get('/loanreply/:ssn', async function(req, res, next) {
  let ssn = req.params.ssn
  let result = await ctrl.getLoanReply(ssn)
  if (result.statusCode == 200) {
    res.render('loanreply', {'reply': result.loanReply})
  }
});


module.exports = router;
