package com.dev4.miniprogram.base.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

/**
 * @version 1.0
 * @auther jcb
 * @date 2018/8/15
 * @description
 */

@RestController
@EnableAutoConfiguration
@ComponentScan
public class BaseController {

    protected Logger log = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(value = "/",method = {RequestMethod.GET,RequestMethod.POST})
    public String home(){
        return "welcome";
    }

//    @RequestMapping(value = "/api/*Controller",method = {RequestMethod.GET,RequestMethod.POST})
//    public ControllerResponse miniprogram(HttpServletRequest request, @RequestBody ControllerRequest controllerRequest){
//        log.info("---------------miniprogram start------------");
//
//        return new ControllerResponse(new HashMap<String,Object>());
//
//    }

}
