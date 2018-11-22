let axios = require('axios')
let backendUrl = 'http://loan-broker-api:8081/quote'
let ctrl = {}

ctrl.sendLoanRequest = async function(loan){
  try{
    loan['loanAmount'] = parseFloat(loan.loanAmount)
    loan['loanDuration'] = parseInt(loan.loanDuration)
    console.log(`LOAN REQUEST TO SEND: ${JSON.stringify(loan)}`);
    let res = await axios.post(`${backendUrl}`, loan)
    // console.log(`RESULT: ${JSON.stringify(res, null, 2)}`);
    res['statusCode'] = res.status
    console.log(res);
    return res
  }catch(e){
    console.log(`sendLoanRequest() ERROR: ${e.toString()}`);
    return {
      'statusCode': 400,
      'errorMessage': `sendLoanRequest() ERROR: ${e.toString()}`
    }
  }
}

ctrl.getLoanReply = async function(ssn){
  try{
    let res = await axios.get(`${backendUrl}/${ssn}`)
    // console.log(`RESULT: ${JSON.stringify(res.data)}`);
    res['statusCode'] = res.status
    return res
  }catch(e){
    console.log(`getLoanReply() ERROR: ${e.toString()}`);
    return {
      'statusCode': 400,
      'errorMessage':`getLoanReply() ERROR: ${e.toString()}`
    }
  }
}

module.exports = ctrl
