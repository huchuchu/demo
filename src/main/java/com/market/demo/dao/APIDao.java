package com.market.demo.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.market.demo.domain.Member;
import com.market.demo.domain.Order;
import com.market.demo.domain.Product;

@Repository
public class APIDao {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;

	/**
	 * 상품 목록 수 조회
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	public Long listProductTotalCount(Product param) throws SQLException {
		String query = "select count(item_seq) totalCount from item";
		if(param.getSearchValue() !=null && !param.getSearchValue().contentEquals("")) {
			query += " WHERE item_name LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";			
		}
		
		return (Long) jdbcTemplate.queryForMap(query).get("totalCount");
	}

	/**
	 * 상품 목록 조회
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	public List<Map<String, Object>> listProduct(Product param) throws SQLException {
		String query = "select item_seq itemSeq, item_name itemNm, item_price itemPrc, item_amount itemAmt, item_regdate itemRegDt  from item";	
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += " where item_name LIKE CONCAT('%','"+param.getSearchValue()+"','%')";
		}
//		query += "LIMIT " + param.getStart() + "," + param.getLimit();		
		return jdbcTemplate.queryForList(query);
	}

	/**
	 * 상품 등록
	 * @param param
	 * @throws SQLException
	 */
	public void addProduct(Product param) throws SQLException {
		
		String query = "insert into item (item_name, item_price, item_amount, item_regdate) values(?,?,?,now())";
		jdbcTemplate.update(query, new Object[] {param.getItemNm(), param.getItemPrc(), param.getItemAmt()});
	
	}
	/**
	 * 상품 삭제
	 * @param param
	 * @throws SQLException
	 */
	public void deleteProduct(Product param) throws SQLException{
		String query = "delete from item where item_seq=?";
		jdbcTemplate.update(query, new Object[] {param.getItemSeq()});
	}
	
	/**
	 * 상품 수정
	 * @param param
	 */
	public void updateProduct(Product param) throws SQLException {
		String query = "update item "
				+ "set item_name = ?, item_price = ?, item_amount = ?"
				+ " where item_seq  = ?";
		jdbcTemplate.update(query, new Object[] {param.getItemNm(), param.getItemPrc(), param.getItemAmt(), param.getItemSeq()});
	}

	/**
	 * 멤버 수 조회
	 * @param param
	 * @return
	 */
	public Long listMemberTotalCount(Member param) throws SQLException {
		String query = "select count(member_seq) totalCount from member";
		if(param.getSearchValue() != null && !param.getSearchValue().equals("")) {
			query += " where " + param.getSearchCode() + " like concat('%','"+ param.getSearchValue() + "','%')";
		}
		return (Long)jdbcTemplate.queryForMap(query).get("totalCount");
	}
	
	/**
	 * 멤버 리스트 조회
	 * @param param
	 * @return
	 * @throws SQLException
	 */
	public List<Map<String, Object>> listMember(Member param) throws SQLException{
		String query = "select member_seq memberSeq, member_id memberId, member_name memberNm, concat(member_dft_addr, member_dtl_addr) memberAddr, member_regdate memberRegDt from member";
		if(param.getSearchValue() !=null && !param.getSearchValue().equals("")) {
			query += " where " + param.getSearchCode() + " like concat('%','"+ param.getSearchValue() + "','%')";
		}
		query += " LIMIT " + param.getStart() + " , " + param.getLimit();
		return jdbcTemplate.queryForList(query);
	}
	
	/**
	 * 주문 리스트 개수 조회
	 * @param param
	 * @return
	 */
	public Long listOrderTotalCount(Order param) throws SQLException {
		String query =  "select count(a.member_seq) totalCount " + 
				"from member a " + 
				"inner join orders b on a.member_seq  = b.member_seq " + 
				"inner join orderitem c on b.order_seq  = c.order_seq " + 
				"inner join item d on c.item_seq = d.item_seq " + 
				"left outer join delivery e on b.order_seq  = e.order_seq ";
		if(param.getSearchValue() !=null && !param.getSearchValue().equals("")) {
			query += " WHERE a.member_name LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		query += " LIMIT " + param.getStart() + " , " + param.getLimit();
		return (Long) jdbcTemplate.queryForMap(query).get("totalCount");
	}
	
	/**
	 * 주문 리스트 조회
	 * @param param
	 * @return
	 */
	public List<Map<String, Object>> listOrder(Order param) {
		try {
		String query = "select " + 
				"a.member_name memberNm, " + 
				"b.order_regdate orderRegDt, " + 
				"b.order_status orderStatus, " + 
				"c.order_count orderCnt, " + 
				"c.order_total_price orderTotalPrc, " + 
				"e.delivery_name deliveryNm, " + 
				"concat(e.delivery_dft_addr, e.delivery_dtl_addr) deliveryAddr, " + 
				"e.delivery_zipcode deliveryZipcode, " + 
				"e.delivery_status deliveryStatus, " + 
				"d.item_name orderNm "+
				"from member a " + 
				"inner join orders b on a.member_seq  = b.member_seq " + 
				"inner join orderitem c on b.order_seq  = c.order_seq " + 
				"inner join item d on c.item_seq = d.item_seq " + 
				"left outer join delivery e on b.order_seq  = e.order_seq ";
		
		if(param.getSearchValue() !=null && !param.getSearchValue().equals("")) {
			query += " WHERE a.member_name LIKE CONCAT('%','"+param.getSearchValue()+"','%') ";	
		}
		query += " LIMIT " + param.getStart() + " , " + param.getLimit();
	
		return jdbcTemplate.queryForList(query);
		
		}catch (EmptyResultDataAccessException e) {
			return null;
		}
		
	}
	

}
