package com.mystery.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mystery.model.Review;

@Repository
public interface ReviewDAO extends JpaRepository<Review, Integer> {

//	@Query(value = "select r from review r join book b on ", nativeQuery = true)
//	List<Review> getReviewsByBookId(@Param("bookId") int bookId);
}
