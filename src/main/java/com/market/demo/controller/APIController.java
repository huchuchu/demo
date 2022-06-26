package com.market.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.market.demo.domain.Member;
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
	 * ====================== 상품 API ======================
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
	public Map<String, Object> addProduct(Product param){

		Map<String, Object> result = new HashMap<String, Object>();
		
		try {
			apiService.addProduct(param);
			result.put("code", 200);
			
		}catch (Exception e) {
			e.printStackTrace();
			result.put("code", e.getMessage());
			result.put("msg", "상품등록실패");
			return result;
		}
			
		return result;
	}
	
	/**
	 * 상품 삭제 API
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/delete/Product", method = RequestMethod.POST)
	public Map<String, Object> deleteProduct(Product param) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			apiService.deleteProduct(param);
			result.put("code", 200);
		}catch (Exception e) {
			e.printStackTrace();
			result.put("code", e.getMessage());
			result.put("msg", "상품삭제실패");
		}
		
		return result;

	}
	
	/**
	 * 상품 수정 API
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/update/Product", method = RequestMethod.POST)
	public Map<String, Object> updateProduct(Product param) {
		
		Map<String, Object> result = new HashMap<String, Object>();
		
		try {
			apiService.updateProduct(param);
			result.put("code", 200);
			
		}catch (Exception e) {
			e.printStackTrace();
			result.put("code", e.getMessage());
			result.put("msg", "상품 수정 실패");
		}
		
		return result;
	}
	
	/**
	 * ====================== 회원 API ======================
	 * 회원목록조회 API
	 * @param req
	 * @param param
	 * @return
	 */
	@RequestMapping(value = "/list/member", method = RequestMethod.POST)
	public Map<String, Object> listMember(HttpServletRequest req, Member param){		
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String, Object>> data = null;
		try {
			Long totalCount = 0L;
			totalCount = apiService.listMemberTotalCount(param);
			
			if(totalCount>0) {
				data = apiService.listMember(param);
			}
			
			result.put("code", 200);
			result.put("totalCount", totalCount);
			result.put("data", data);			
		}catch (Exception e) {
			e.printStackTrace();
			result.put("code", e.getMessage());
			result.put("msg", "회원목록죄회 실패");
		}
				
		return result;
		
	}
	

}
