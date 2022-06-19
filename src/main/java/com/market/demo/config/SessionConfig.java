package com.market.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SessionConfig implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		
		// 지정해둔 패턴의 URL로 접속할 경우 interceptor을 거쳐서 controller로 
		registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/api/**");		
	}
	
	

}
