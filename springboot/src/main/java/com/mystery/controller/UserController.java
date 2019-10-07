package com.mystery.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mystery.model.User;
//import com.mystery.model.Review;
//import com.mystery.service.ReviewService;
import com.mystery.service.UserService;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	UserService service;

	@PostMapping("/isValidUser")
	public User isValidUser(@RequestBody User user, HttpServletRequest request) {
		User loggedInUser = null;
		if (service.isValidUser(user) != null) {
			loggedInUser = service.getUserByEmail(user);
			request.getSession().setAttribute("User", loggedInUser);
		}
		return loggedInUser;
	}

	@PostMapping("/registerUser")
	public User registerUser(@RequestBody User user) {
		// TODO Auto-generated method stub
		return service.registerUser(user);
	}

	@PutMapping("/updateUser")
	public User updateUserInfo(@RequestBody User user) {
		return service.updateUserInfo(user);
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}

	@PostMapping("/destroy")
	public String destroySession(HttpServletRequest request) {
		request.getSession().invalidate();
		return "/home";
	}
}
