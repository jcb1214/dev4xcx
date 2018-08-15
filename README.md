/Users/xiangtingyuyu/dev4xcx
├── README.md
├── client //小程序前台
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   ├── config.js //server配置文件
│   ├── imgs //图片文件夹
│   │   ├── index.png
│   │   ├── index_select.png
│   │   ├── info.png
│   │   ├── ....
│   ├── pages //页面包
│   │   ├── index //首页
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   ├── infoShare //信息共享首页
│   │   │   ├── infoShare.js
│   │   │   ├── infoShare.json
│   │   │   ├── infoShare.wxml
│   │   │   └── infoShare.wxss
│   │   └── vote //投票首页
│   │       ├── vote.js
│   │       ├── vote.json
│   │       ├── vote.wxml
│   │       └── vote.wxss
│   ├── project.config.json
│   └── utils //公用方法包
│       └── util.js
└── server //后台server
    ├── pom.xml
    ├── src
    │   ├── main
    │   │   ├── java
    │   │   │   └── com
    │   │   │       └── dev4
    │   │   │           └── miniprogram
    │   │   │               ├── MiniprogramApplication.java //程序入口
    │   │   │               ├── base //基本方法包
    │   │   │               │   ├── Dictionary.java //常量类
    │   │   │               │   └── controller //controller基本类包
    │   │   │               │       ├── BaseController.java
    │   │   │               │       ├── ControllerRequest.java
    │   │   │               │       └── ControllerResponse.java
    │   │   │               ├── controllers //controller包
    │   │   │               └── utils //公用方法包
    │   │   └── resources
    │   │       └── application.properties
    │   └── test //测试包
    └── target

43 directories, 63 files
