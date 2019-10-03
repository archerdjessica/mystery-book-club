package com.mystery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.mystery.model.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {

//	@Query("select u from Account where email = ?1 and password = ?2")
//	isValidUser(@PathVariable("email") )
}
