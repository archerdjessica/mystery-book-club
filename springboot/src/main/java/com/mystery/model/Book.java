package com.mystery.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Table
@Entity
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int bookId;
	
	@NotNull
	//@Pattern(regexp= "[0-9]{10,13}$")
	private long isbn;
	
	@OneToOne
	@NotNull
	private Publisher publisher;
	
	@OneToMany
	private List<Author> authors;
	
	@NotNull
	private String title;

	public Book() {
		// TODO Auto-generated constructor stub
	}

	public long getIsbn() {
		return isbn;
	}

	public void setIsbn(long isbn) {
		this.isbn = isbn;
	}

	public Publisher getPublisher() {
		return publisher;
	}

	public void setPublisher(Publisher publisher) {
		this.publisher = publisher;
	}

	public List<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(List<Author> authors) {
		this.authors = authors;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
