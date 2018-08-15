package com.dev4.miniprogram.base.controller;

import java.util.HashMap;
import java.util.Map;

/**
 * @version 1.0
 * @auther jcb
 * @date 2018/8/15
 * @description 后台返回前台抽象VO
 */
public class ControllerResponse {
    private Map rspHead;
    private Object rspBody;

    public Object getRspBody() {
        return rspBody;
    }

    public void setRspBody(Object rspBody) {
        this.rspBody = rspBody;
    }


    public Map getRspHead() {
        return rspHead;
    }

    public void setRspHead(Map rspHead) {
        this.rspHead = rspHead;
    }

    public ControllerResponse(Object rspBody) {
        this.rspHead = new HashMap();
        rspHead.put("traceNo","111111111");
        rspHead.put("tranSuccess","1");
        this.rspBody = rspBody;
    }
}
