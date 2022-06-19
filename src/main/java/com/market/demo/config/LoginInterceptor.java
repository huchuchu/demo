package com.market.demo.config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class LoginInterceptor implements HandlerInterceptor {

	
	// return false : 막는거 return true : gogo
	@Override
	public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object obj)
			throws Exception {
		
		// session이 있으면 interceptor에서 넘어간다
		if(req.getSession().getAttribute("admin") == null) {
			res.sendRedirect("/fail");
			return false;
		}		
		
		return true;
		
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
	}

}
