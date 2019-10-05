package com.mystery.service;

import java.util.List;

import com.mystery.model.Publisher;

public interface PublisherService {

	public Publisher addPublisher(Publisher publisher);
	public List<Publisher> getPublisherList(); // might not use
}
