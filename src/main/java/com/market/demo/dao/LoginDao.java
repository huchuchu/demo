package com.market.demo.dao;

import java.sql.SQLException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.market.demo.domain.Admin;

@Repository
public class LoginDao {
	
	@Autowired
	private JdbcTemplate sql;
	
	public Map<String, Object> loginInfo (Admin param)  {
		String query = "select admin_name , admin_id  from admin where admin_id = '"+param.getAdminId()+"' and admin_pwd  = '"+param.getAdminPwd()+"'" ;
		
		Map<String, Object> result = sql.queryForMap(query);
		
		return result ;
	}

}
