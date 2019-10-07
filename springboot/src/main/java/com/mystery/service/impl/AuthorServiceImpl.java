package com.mystery.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystery.dao.AuthorDAO;
import com.mystery.model.Author;
import com.mystery.service.AuthorService;

@Service
public class AuthorServiceImpl implements AuthorService {

	@Autowired
	AuthorDAO dao;
	
	@Override
	public List<Author> getAuthors() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Author addAuthor(Author author) {
		// TODO Auto-generated method stub
		return dao.save(author);
	}

}