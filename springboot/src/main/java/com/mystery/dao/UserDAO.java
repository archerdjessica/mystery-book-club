package com.mystery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.mystery.model.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {

	@Query(value="select * from Account u where u.email = :email", nativeQuery = true)
	public User findUserByEmail(@Param("email") String email);
}
