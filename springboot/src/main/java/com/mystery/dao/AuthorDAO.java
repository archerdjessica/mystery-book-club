package com.mystery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mystery.model.Author;

@Repository
public interface AuthorDAO extends JpaRepository<Author, Integer> {

}
