package com.mystery.service;

import java.util.List;

import com.mystery.model.Review;

public interface ReviewService {

	public Review saveReview(Review review);
	public List<Review> getReviews();
	public Review editReview(Review review);
	public void deleteReview(int id);
//	public List<Review> getReviewByBookId(int bookId);
}
