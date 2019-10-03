package com.mystery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mystery.model.Book;

@Repository
public interface BookDAO extends JpaRepository<Book, Integer> {

}
