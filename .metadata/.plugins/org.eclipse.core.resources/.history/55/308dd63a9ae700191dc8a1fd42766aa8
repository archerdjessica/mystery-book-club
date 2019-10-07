package com.mystery.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mystery.model.Publisher;
import com.mystery.service.PublisherService;

@CrossOrigin
@RestController
public class PublisherController {

	@Autowired
	PublisherService service;
	
	@PostMapping("/addPublisher")
	public Publisher addPublisher(@RequestBody Publisher publisher) {
		System.out.println(publisher);
		return service.addPublisher(publisher);
	}
}
