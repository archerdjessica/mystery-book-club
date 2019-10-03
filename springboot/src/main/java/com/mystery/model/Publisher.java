package com.mystery.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Table
@Entity
public class Publisher {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int pubId;
	@NotNull
	private String pubName;
	
	@NotNull
	private Long contact;
	
	public Publisher() {
		// TODO Auto-generated constructor stub
	}

	public int getPubId() {
		return pubId;
	}

	public void setPubId(int pubId) {
		this.pubId = pubId;
	}

	public String getName() {
		return pubName;
	}

	public void setName(String name) {
		this.pubName = name;
	}

	public Long getContact() {
		return contact;
	}

	public void setContact(Long contact) {
		this.contact = contact;
	}
	
	
}
