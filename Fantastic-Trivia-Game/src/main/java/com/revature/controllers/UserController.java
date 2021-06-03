package com.revature.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.revature.models.User;
import com.revature.services.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {

	private UserService uServ;

	@Autowired
	public UserController(UserService serv) {
		this.uServ = serv;
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<User> searchUsersById(@PathVariable("id") Integer id) {
		
		User retrieved = uServ.searchUsersById(id);
		return new ResponseEntity<User>(retrieved, HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<User>> searchUsersById() {
		
		List<User> retrieved = uServ.getAllUsers();
		return new ResponseEntity<List<User>>(retrieved, HttpStatus.OK);
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<String> authenticate(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password){
		
		User user = uServ.logIn(username, password);
		
		if (user != null) {
			HttpHeaders responseHeaders = new HttpHeaders();
			responseHeaders.set("Authorization", user.getId()+ ":" + user.getRoleId());
			
			String message = "Login Successful";
			return new ResponseEntity<>(message, responseHeaders, HttpStatus.ACCEPTED);
		} else {
			String message = "Login Unsuccessful";
			return new ResponseEntity<>(message, HttpStatus.CONFLICT);
		}
		
	}
	
	
	@PostMapping(value="/signup")
	public ResponseEntity<String> signup(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password , @RequestParam(name = "email") String email){
		
		User user = new User();
		user.setUsername(username);
		user.setPassword(password);
		user.setEmail(email);
		user.setRoleId(1);
		user.setStatusId(1);
		
		user = uServ.saveUser(user);
		
		if (user != null) {		
			String message = "Signup Successful";
			return new ResponseEntity<>(message, HttpStatus.ACCEPTED);
		} else {
			String message = "Signup Unsuccessful";
			return new ResponseEntity<>(message, HttpStatus.CONFLICT);
		}
	}
	
	@PutMapping(value = "/ban/{id}")
	public ResponseEntity<String> banUser(@PathVariable("id") Integer id) {
		
		User retrieved = uServ.banUser(id);
		String message = "User Banned";
		
		return new ResponseEntity<String>(message, HttpStatus.OK);
	}
	
	@PutMapping(value = "/permit/{id}")
	public ResponseEntity<String> permitUser(@PathVariable("id") Integer id) {
		
		User retrieved = uServ.permitUser(id);
		String message = "User Permited";
		
		return new ResponseEntity<String>(message, HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") Integer id) {
		
		int retrieved = uServ.deleteUser(id);
		String message = "User Deleted";
		
		return new ResponseEntity<String>(message, HttpStatus.OK);
	}

}
