package com.mystery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mystery.model.Review;
import com.mystery.service.ReviewService;

@CrossOrigin
@RestController
public class ReviewController {

	@Autowired
	ReviewService service;

	@PostMapping("/writeReview")
	public Review saveReview(@RequestBody Review review) {
		// TODO Auto-generated method stub
		return service.saveReview(review);
	}

	@GetMapping("/reviews")
	public List<Review> getReviews() {
		// TODO Auto-generated method stub
		return service.getReviews();
	}

	@PutMapping("/editReview")
	public Review editReview(@RequestBody Review review) {
		// TODO Auto-generated method stub
		return service.editReview(review);
	}

	@DeleteMapping("/deleteReview/{id}")
	public void deleteReview(@PathVariable int id) {
		// TODO Auto-generated method stub
		service.deleteReview(id);
	}

//	@GetMapping("/")
//	public String Hello() {
//		return "Hello!";
//	}
}
