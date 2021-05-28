package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
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

	@GetMapping(value = "/search/{id}")
	public ResponseEntity<User> searchUsersById(@PathVariable("id") Integer id) {
		
		User retrieved = uServ.searchUsersById(id);
		return new ResponseEntity<User>(retrieved, HttpStatus.OK);
	}

}
