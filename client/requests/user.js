var config = require('../config')
var baseRequest = require('./baseRequest.js')

var login = (param) =>{
  baseRequest.baseRequest({ url: config.service.requestUrl, data: { code: param.code, response: { 'a': 1 } }, success: param.success,fail:param.fail})
}

module.exports = { login }