package com.market.demo.domain;

import java.sql.Date;

public class Member {
	
	private Integer memberSeq;
	private String memberId;
	private String memberNm;
	private String memberAddr;
	private Date memberRegDt;
	
	private String SearchCode;
	private String searchValue;
	private int start;
	private int limit;
	
	
	public Integer getMemberSeq() {
		return memberSeq;
	}
	public void setMemberSeq(Integer memberSeq) {
		this.memberSeq = memberSeq;
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public String getMemberNm() {
		return memberNm;
	}
	public void setMemberNm(String memberNm) {
		this.memberNm = memberNm;
	}
	public String getMemberAddr() {
		return memberAddr;
	}
	public void setMemberAddr(String memberAddr) {
		this.memberAddr = memberAddr;
	}

	public Date getMemberRegDt() {
		return memberRegDt;
	}
	public void setMemberRegDt(Date memberRegDt) {
		this.memberRegDt = memberRegDt;
	}
	public String getSearchCode() {
		return SearchCode;
	}
	public void setSearchCode(String searchCode) {
		SearchCode = searchCode;
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
