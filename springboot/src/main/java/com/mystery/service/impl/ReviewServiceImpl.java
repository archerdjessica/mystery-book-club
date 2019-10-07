package com.mystery.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystery.dao.BookDAO;
import com.mystery.dao.ReviewDAO;
import com.mystery.model.Review;
import com.mystery.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	ReviewDAO dao;
	
	@Autowired
	BookDAO bookDao;
	
	@Override
	public Review saveReview(Review review) {
		// TODO Auto-generated method stub
		return dao.save(review);
	}

	@Override
	public List<Review> getReviews() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Review editReview(Review review) {
		// TODO Auto-generated method stub
		return dao.save(review);
	}

	@Override
	public void deleteReview(int id) {
		// TODO Auto-generated method stub
		dao.deleteById(id);
	}

//	@Override
//	public List<Review> getReviewByBookId(int bookId) {
//		// TODO Auto-generated method stub
//		return dao.getReviewsByBookId(bookId);
//	}

}
