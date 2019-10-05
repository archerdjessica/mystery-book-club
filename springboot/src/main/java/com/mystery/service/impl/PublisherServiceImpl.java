package com.mystery.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystery.dao.PublisherDAO;
import com.mystery.model.Publisher;
import com.mystery.service.PublisherService;

@Service
public class PublisherServiceImpl implements PublisherService {

	@Autowired
	PublisherDAO dao;

	@Override
	public Publisher addPublisher(Publisher publisher) {
		// TODO Auto-generated method stub
		return dao.save(publisher);
	}

	@Override
	public List<Publisher> getPublisherList() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}
}
