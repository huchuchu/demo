package com.market.demo.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api/")
public class APIController {
	
	@RequestMapping(value = "/sessioncheck", method=RequestMethod.POST)
	public Map<String, Object> sessionCheck(HttpServletRequest req){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("code", 200);		
		return result;		
	}

}
