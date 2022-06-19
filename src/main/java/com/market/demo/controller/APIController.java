package com.market.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.market.demo.domain.Product;
import com.market.demo.service.APIService;

@RestController
@RequestMapping(value="/api/")
public class APIController {
	
	@Autowired
	private APIService apiService;
	
	@RequestMapping(value = "/sessioncheck", method=RequestMethod.POST)
	public Map<String, Object> sessionCheck(HttpServletRequest req){
		Map<String, Object> result = new HashMap<String, Object>();
		result.put("code", 200);		
		return result;		
	}
	
	
	/**
	 * 상품 목록 API
	 * @return
	 */
	@RequestMapping(value="/list/product", method = RequestMethod.POST)
	public Map<String, Object> listProduct(Product param){

		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String, Object>> data = null;
		try {
			Long totalCount = 0L;
					totalCount = apiService.listProductTotalCount(param);
			System.out.println("totalcnt" + totalCount);
			if(totalCount > 0) {
				data = apiService.listProduct(param);
			}
			result.put("code", 200);
			result.put("totalCount", totalCount);
			result.put("data", data);
		}catch (Exception e) {
			e.printStackTrace();
			result.put("code", e.getMessage());
			result.put("msg", "상품조회 실패");
			
			return result;
		}
		
		
		return result;
	}
	
	/**
	 * 상품 등록 API
	 * @return
	 */
	@RequestMapping(value = "/add/Product", method = RequestMethod.POST)
	public Map<String, Object> addProduct(){
		Map<String, Object> result = null;
		
		return result;
	}
	

}
