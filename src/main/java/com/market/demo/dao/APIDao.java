package com.market.demo.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.market.demo.domain.Product;

@Repository
public class APIDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public Long listProductTotalCount(Product param) throws SQLException {
		String query = "select count(item_seq) totalCount from item";	
		
		return (Long) jdbcTemplate.queryForMap(query).get("totalCount");
	}

	public List<Map<String, Object>> listProduct(Product param) throws SQLException {
		String query = "select item_name itemNm, item_price itemPrc, item_amount itemAmt, item_regdate itemRegDt  from item";	
		
		return jdbcTemplate.queryForList(query);
	}

	public void addProduct(Product param) throws SQLException {
		
		String query = "insert into item (item_name, item_price, item_amount, item_regdate) values(?,?,?,now())";
		jdbcTemplate.update(query, new Object[] {param.getItemNm(), param.getItemPrc(), param.getItemAmt()});
	
	}
	
	

}
