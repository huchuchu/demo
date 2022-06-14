package com.market.demo.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.demo.service.TestService;

@RestController
public class TestController {
	
	@Autowired
	private TestService service;	

	@RequestMapping(value = "/test")
	public Map<String, Object> test(){
		Map<String, Object> res = new HashMap<String, Object>();
		res.put("name", "huchuchu");
		res.put("age", 30);
		return res;
	}
	
	@RequestMapping(value = "/getList")
	public Map<String, Object> getList(){
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String, Object>> list = null;
		try {			
				list = service.getList();
				result.put("data", list);

				
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	
}
