package com.mystery.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mystery.dao.UserDAO;
import com.mystery.model.User;
import com.mystery.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserDAO dao;

	@Override
	public Boolean isValidUser(User user) {
		Boolean b = false;
		User dbUser = dao.getOne(user.getId());
		if(dbUser != null) {
			if(user.getPassword().equals(dbUser.getPassword()))
				b = true;
		}
		return b;
	}

	@Override
	public User updateUserInfo(User user) {
		// TODO Auto-generated method stub
		return dao.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public User registerUser(User user) {
		// TODO Auto-generated method stub
		return dao.save(user);
	}
}