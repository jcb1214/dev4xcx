var config = require('../config')
var baseRequest = require('./baseRequest.js')

var login = (code,success,fail) =>{
  baseRequest.baseRequest(config.service.requestUrl,{code,response:{'a':1}},success,fail)
}

module.exports = { login }