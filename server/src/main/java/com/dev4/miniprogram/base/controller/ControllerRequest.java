package com.dev4.miniprogram.base.controller;

import java.util.Map;

/**
 * @version 1.0
 * @auther jcb
 * @date 2018/8/15
 * @description 前台请求后台
 */
public class ControllerRequest {
    private Map<String,Object> reqHead;
    private Map<String,Object> reqBody;

    public Map<String, Object> getReqHead() {
        return reqHead;
    }

    public void setReqHead(Map<String, Object> reqHead) {
        this.reqHead = reqHead;
    }

    public Map<String, Object> getReqBody() {
        return reqBody;
    }

    public void setReqBody(Map<String, Object> reqBody) {
        this.reqBody = reqBody;
    }
}
