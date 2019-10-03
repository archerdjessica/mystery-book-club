package com.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long reviewId;
	@ManyToOne
	private Book book;
	private String review;
	private Date dateWritten;
	@OneToOne
	private User user;
	
	public Review() {
		// TODO Auto-generated constructor stub
	}

	public long getReviewId() {
		return reviewId;
	}

	public void setReviewId(long reviewId) {
		this.reviewId = reviewId;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
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
