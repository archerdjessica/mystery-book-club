package com.mystery.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int reviewId;
	
	@NotNull
	@ManyToOne
	private Book book;
	
	@NotNull
	@NotEmpty
	private String reviewBody;
	
	@NotNull
	private Date dateWritten;
	
	@NotNull
	@OneToOne
	private User user;
	
	public Review() {
		// TODO Auto-generated constructor stub
	}

	public int getReviewId() {
		return reviewId;
	}

	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public String getReview() {
		return reviewBody;
	}

	public void setReview(String review) {
		this.reviewBody = review;
	}

	public Date getDateWritten() {
		return dateWritten;
	}

	public void setDateWritten(Date dateWritten) {
		this.dateWritten = dateWritten;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
}
