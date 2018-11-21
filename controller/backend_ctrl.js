let axios = require('axios')
let backendUrl = 'http://loan-broker-api:8081/quote'
let ctrl = {}

ctrl.sendLoanRequest = async function(loan){
  try{
    loan['loanAmount'] = parseFloat(loan.loanAmount)
    loan['loanDuration'] = parseInt(loan.loanDuration)
    console.log(`LOAN REQUEST TO SEND: ${JSON.stringify(loan)}`);
    let res = await axios.post(`${backendUrl}loanRequest`, loan)
    console.log(`RESULT: ${JSON.stringify(res, null, 2)}`);
    return res
  }catch(e){
    console.log(`loanRequest() ERROR: ${e.toString()}`);
    return {
      'statusCode': 400,
      'errorMessage': e.toString()
    }
  }
}

ctrl.getLoanReply = async function(ssn){
  try{
    let res = await axios.get(`${backendUrl}/${ssn}`)
    console.log(`RESULT: ${JSON.stringify(res, null, 2)}`);
    return res
  }catch(e){
    console.log(`loanRequest() ERROR: ${e.toString()}`);
    return {
      'statusCode': 400,
      'errorMessage': e.toString()
    }
  }
}

module.exports = ctrl
