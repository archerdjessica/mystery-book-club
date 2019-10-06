package com.mystery.service;

import java.util.List;

import com.mystery.model.User;

public interface UserService {

	public Boolean isValidUser(User user);
	public User updateUserInfo(User user);
	public List<User> getAllUsers();
	public User getUserByEmail(User user);
	public User registerUser(User user);
}
