var baseRequest = (param)=>{
  wx.request({
    url: param.url,
    data: {
      reqBody: param.data,
      reqHead: {}
    },
    method: 'POST',
    success: res=>{param.success(res.data.rspBody)},
    fail: param.fail
  })
}
module.exports = { baseRequest }