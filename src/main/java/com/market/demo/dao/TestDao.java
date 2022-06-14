package com.market.demo.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TestDao {

	@Autowired
	private JdbcTemplate sql;
	
	public List<Map<String, Object>> getList() throws SQLException{
		
		String query = "select test_seq testSeq, test_name testName, test_id testId from test";
		return sql.queryForList(query);		
		
	}
}
