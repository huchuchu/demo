 package com.market.demo.controller;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.market.demo.dao.LoginDao;
import com.market.demo.domain.Admin;

@RestController
public class LoginController {
	
	@Autowired
	private LoginDao logindao;
	
	@RequestMapping(value="/loginInfo")
	public Map<String, Object> loginInfo(Admin param, HttpServletRequest req) {
		
		Map<String, Object> result = null;
		try {
			Map<String, Object> session = (Map<String, Object>) req.getSession().getAttribute("admin");
			result = logindao.loginInfo(param);
			result.put("code", 200);			
			req.getSession().setAttribute("admin", result);
			
		}catch (Exception e) {
			e.printStackTrace();
			result = new HashMap<String, Object>();
			result.put("code", 404);
			result.put("msg", e.getMessage());
			return result;
		}
		
		return result;
	}
	
	
	@RequestMapping(value="/fail")
	public Map<String, Object> fail(){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("code", 999);
		return result;
	}
	

}
