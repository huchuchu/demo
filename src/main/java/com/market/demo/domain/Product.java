package com.market.demo.domain;

import java.util.Date;

public class Product {
	
	private Integer itemSeq;
	private String itemNm;
	private Integer itemPrc;
	private Date itemRegDt;
	private String searchValue;
	private int start;
	private int limit;
	
	
	public Integer getItemSeq() {
		return itemSeq;
	}
	public void setItemSeq(Integer itemSeq) {
		this.itemSeq = itemSeq;
	}
	public String getItemNm() {
		return itemNm;
	}
	public void setItemNm(String itemNm) {
		this.itemNm = itemNm;
	}
	public Integer getItemPrc() {
		return itemPrc;
	}
	public void setItemPrc(Integer itemPrc) {
		this.itemPrc = itemPrc;
	}
	public Date getItemRegDt() {
		return itemRegDt;
	}
	public void setItemRegDt(Date itemRegDt) {
		this.itemRegDt = itemRegDt;
	}
	public String getSearchValue() {
		return searchValue;
	}
	public void setSearchValue(String searchValue) {
		this.searchValue = searchValue;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	
	
	

}
