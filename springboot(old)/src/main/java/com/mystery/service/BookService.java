package com.mystery.service;

import java.util.List;

import com.mystery.model.Book;

public interface BookService {

	public List<Book> getAllBooks();
	public Book getBookById(int id);
	public Book addBook(Book book);
	//public void deleteBookById(int id); // might not use
}
