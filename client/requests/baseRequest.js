var baseRequest = (url,data,success,fail)=>{
  wx.request({
    url: url,
    data: {
      reqBody: data,
      reqHead: {}
    },
    method: 'POST',
    success: res=>{success(res.data.rspBody)},
    fail: fail
  })
}
module.exports = { baseRequest }