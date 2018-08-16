/**
 * 小程序配置文件
 */

// 此处主机域名修改成后端的域名
var host = 'https://xcx.jcbcty.cn:8099';

var config = {

    // 下面的地址配置后端路径
    service: {
        host,
        // 登录地址，用于建立会话
        loginUrl: `${host}/`,
        //测试用url
        requestUrl: `${host}/api/TestController`,
        // 上传图片接口
        uploadUrl: `${host}/api/upload`
    }
};

module.exports = config;
