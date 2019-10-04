package com.mystery.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table
public class Author {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int authorId;
	@NotNull
	private String firstName;
	@NotNull
	private String lastName;
	
	public Author() {
		// TODO Auto-generated constructor stub
	}

	public int getAuthorID() {
		return authorId;
	}

	public void setAuthorID(int authorID) {
		this.authorId = authorID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
}
