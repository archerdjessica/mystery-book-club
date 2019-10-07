package com.mystery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mystery.model.Book;
import com.mystery.service.BookService;

@CrossOrigin
@RestController
public class BookController {

	@Autowired
	BookService service;

	// create
	@PostMapping("/addBook")
	public Book addBook(@RequestBody Book book) {
		return service.addBook(book);
	}

	// read
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return service.getAllBooks();
	}

	// read
	@GetMapping("/book/{id}")
	public Book getBookById(@PathVariable int id) {
		// TODO Auto-generated method stub
		return service.getBookById(id);
	}
}
