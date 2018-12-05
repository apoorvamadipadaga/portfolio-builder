package com.apoorva.pb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

import com.apoorva.pb.models.User;
import com.apoorva.pb.repositories.UserRepository;

@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;

	@GetMapping("/api/users")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
    }

    @GetMapping("/api/users/{id}")
    public @ResponseBody Optional<User> getUser(@PathVariable Integer id) {
        return userRepository.findById(id);
    }
    
    @PostMapping("/api/users")
    public @ResponseBody User createUser(@RequestBody User user) {
        userRepository.save(user);
        return user;
    }
}