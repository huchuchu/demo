package com.market.demo.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.market.demo.dao.APIDao;
import com.market.demo.domain.Product;

@Service
public class APIService {
	
	@Autowired
	private APIDao apiDao;
	
	public Long listProductTotalCount (Product param) throws SQLException {
		return apiDao.listProductTotalCount(param);
	}
	
	public List<Map<String, Object>> listProduct(Product param) throws SQLException{
		return apiDao.listProduct(param);
	}
	
	public void addProduct(Product param) throws SQLException{
		apiDao.addProduct(param);		
	}
	
	public void deleteProduct(Product param) throws SQLException {
		apiDao.deleteProduct(param);
	}
	
	public void updateProduct(Product param) throws SQLException {
		apiDao.updateProduct(param);
	}

}
