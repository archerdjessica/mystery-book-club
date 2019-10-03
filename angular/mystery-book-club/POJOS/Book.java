package com.model;

import java.util.List;
import java.util.concurrent.Flow.Publisher;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table
@Entity
public class Book {
	@Id
	private long isbn;
	@OneToOne
	private Publisher publisher;
	@OneToMany
	private List<Author> authors;
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
