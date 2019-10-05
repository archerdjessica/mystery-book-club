package com.mystery.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Table(name = "Account")
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int id;
	
	@NotNull
	@Column(unique = true)
	private String email;
	
	@NotNull
	private String password;
	
	@NotNull
	private String name;
	
	@NotNull
	private Date birthday;
	@OneToMany
	private List<Book> readingList;

	public User() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public List<Book> getReadingList() {
		return readingList;
	}

	public void setReadingList(List<Book> readingList) {
		this.readingList = readingList;
	}

}
