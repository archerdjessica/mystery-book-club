package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table
@Entity
public class Publisher {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long pubId;
	private String name;
	private Long contact;
	
	public Publisher() {
		// TODO Auto-generated constructor stub
	}

	public long getPubId() {
		return pubId;
	}

	public void setPubId(long pubId) {
		this.pubId = pubId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}
	
	
}
