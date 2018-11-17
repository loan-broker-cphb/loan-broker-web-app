let axios = require('axios')
let backendUrl = 'http://localhost:8080/loanbroker/' // NOTE: THIS HAS TO BE CHANGED...
let ctrl = {}

ctrl.sendLoanRequest = async function(loan){
  try{
    console.log(`LOAN REQUEST TO SEND: ${JSON.stringify(loan)}`);
    // NOTE: This has to be changed when backend is ready
    let res = ctrl.saveLoan(loan)
    //-----------------------------------------------
    // let res = await axios.post(`${backendUrl}loanRequest`, loan)
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
    // NOTE: This has to be changed when backend is ready
    let res = ctrl.getLoan(ssn)
    //-----------------------------------------------
    // let res = await axios.get(`${backendUrl}loanreply/${ssn}`)
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

//---------------PLAYGROUND - fake response--------------------------
ctrl.saveLoan = function(loan) {
  try {
    return {
      'statusCode': 200,
      'message': 'loan request has been sent'
    }
  } catch (e) {
    console.log('saveToLog ERROR:' + e.toString())
    return {
      'statusCode': 400,
      'errorMessage': e.toString()
    }
  }
}

ctrl.getLoan = function(ssn){
  try {
    return {
      'statusCode': 200,
      'loanReply': {
        'ssn': '110292-1234',
        'banks': [
          {
            'name': 'cphbusiness.bankJSON',
            'interestRate': 3.5
          },
          {
            'name': 'group4.bankRABBIT',
            'interestRate': 0.5
          },
          {
            'name': 'group4.bankREST',
            'interestRate': 0.5
          }
        ]
      }
    }
  } catch (e) {
    console.log('saveToLog ERROR:' + e.toString())
    return {
      'statusCode': 400,
      'errorMessage': e.toString()
    }
  }
}



module.exports = ctrl
