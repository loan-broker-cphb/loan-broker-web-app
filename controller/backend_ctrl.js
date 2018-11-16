let axios = require('axios')
let _ = require('lodash')
let backendUrl = 'http://localhost:8080/loanbroker/' // NOTE: THIS HAS TO BE CHANGED...
let ctrl = {}

ctrl.sendLoanRequest = async function(loan){
  try{
    let res = await axios.post(`${backendUrl}loanRequest`, loan)
    console.log(`RESULT: ${JSON.stringify(res, null, 2)}`);
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
    let res = await axios.get(`${backendUrl}loanreply/${ssn}`)
    console.log(`RESULT: ${JSON.stringify(res, null, 2)}`);
  }catch(e){
    console.log(`loanRequest() ERROR: ${e.toString()}`);
    return {
      'statusCode': 400,
      'errorMessage': e.toString()
    }
  }
}


module.exports = ctrl
