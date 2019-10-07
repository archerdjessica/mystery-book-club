package com.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.mystery.model.User;
import com.mystery.service.UserService;

@CrossOrigin
@RestController
public class UserController {
	@Autowired
    private UserService service;
    @PostMapping("/registerUser")
    public User registerUser(@RequestBody User user) {           
        return service.registerUser(user);
    }
    
    @PostMapping("/userValid")
    public boolean isValidUser(@RequestBody User user) {
    	return service.isValidUser(user) != null;	
    	//return true;
    }
     
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }
    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user) {
        return service.updateUser(user);
    }      

}
