package com.mystery.service;

import java.util.List;

import com.mystery.model.User;

public interface UserService {

	public User isValidUser(User user);
	public User updateUserInfo(User user);
	public List<User> getAllUsers();
	public User getUserByEmail(User user);
	public User registerUser(User user);
	public User updateUser(User user);
	public List<User> getAllUsers();
}
