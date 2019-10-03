package com.mystery.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystery.dao.BookDAO;
import com.mystery.model.Book;
import com.mystery.service.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	BookDAO dao;

	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Book getBookById(int id) {
		// TODO Auto-generated method stub
		return dao.getOne(id);
	}

	@Override
	public Book addBook(Book book) {
		// TODO Auto-generated method stub
		return dao.save(book);
	}
}
