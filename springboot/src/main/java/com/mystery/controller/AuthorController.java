package com.mystery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mystery.model.Author;
import com.mystery.service.AuthorService;

@CrossOrigin
@RestController
public class AuthorController {

	@Autowired
	AuthorService service;
	
	@GetMapping("/authors")
	public List<Author> getAuthors() {
		// TODO Auto-generated method stub
		return service.getAuthors();
	}

	@PostMapping("/addAuthor")
	public Author addAuthor(@RequestBody Author author) {
		// TODO Auto-generated method stub
		return service.addAuthor(author);
	}
}
