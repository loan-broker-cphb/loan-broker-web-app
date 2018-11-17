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
  console.log(`LOAN REQUEST TO SEND: ${JSON.stringify(loan)}`);
  // let res = await ctrl.sendLoanRequest(loan)
  if(res.statusCode == 200){
    res.render('index', {'message': `The loan request from "ssn: ${req.body.ssn}"" has been processed. See "Loan Result" for status.`})
  }
});


router.get('/loanreply', function(req, res, next) {
  // TODO:
  res.render('loanreply')
});


module.exports = router;
