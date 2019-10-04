package com.mystery.service;

import java.util.List;

import com.mystery.model.Author;

public interface AuthorService {

	public Author addAuthor(Author author);
	public List<Author> getAuthors();
}
