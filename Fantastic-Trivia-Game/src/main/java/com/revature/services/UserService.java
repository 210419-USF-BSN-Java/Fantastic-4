package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.User;
import com.revature.repository.UserRepository;

@Service
public class UserService {

	private UserRepository uRepo;

	public UserService() {

	}

	@Autowired
	public UserService(UserRepository repo) {
		this.uRepo = repo;
	}

	public User searchUsersById(Integer id) {

		try {
			return uRepo.findUserById(id);
		} catch (Exception e) {
			return null;
		}
	}

	public User logIn(String username, String password) {

		return null;
	}

	public User apply(User u) {

		return null;
	}
}
