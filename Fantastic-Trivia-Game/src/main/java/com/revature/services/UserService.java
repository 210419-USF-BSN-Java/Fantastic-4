package com.revature.services;

import java.util.List;

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

	// Search user by id
	public User searchUsersById(Integer id) {

		try {
			return uRepo.findUserById(id);
		} catch (Exception e) {
			return null;
		}
	}
	
	// Log in User
	public User logIn(String username, String password) {

		return uRepo.findUserByUsernameAndPassword(username, password);
	}
	
	// Register User
	public User saveUser(User u) {

		return uRepo.saveAndFlush(u);
	}
	
	// Ban User
	public User banUser(int userID) {

		User user = uRepo.getById(userID);
		user.setStatusId(2);
		return uRepo.saveAndFlush(user);
	}
	
	// Un-ban/approve User
	public User permitUser(int userID) {

		User user = uRepo.getById(userID);
		user.setStatusId(1);
		return uRepo.saveAndFlush(user);
	}
	
	// Delete a User
	public int deleteUser(int userID) {
		
		User user = uRepo.getById(userID);
		if(user != null) {
			uRepo.delete(user);
			return 1;
		} else {
			return 0;
		}

	}
	
	// List all Users
	public List<User> getAllUsers() {
		
		return uRepo.findAll();
	}

	// User can update their profile information, returns edited user
	public User updateProfile(int userId, String choice, String update) {
		User editUser = uRepo.findUserById(userId);
		
		if(choice.equals("Username")) {
        	editUser.setUsername(update);
        }else if(choice.equals("Email")) {
        	editUser.setEmail(update);
        }else if(choice.equals("Password")) {
        	editUser.setPassword(update);

        }

		return editUser; //Is this updated in database?
	}
}
