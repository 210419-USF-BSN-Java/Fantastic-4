package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.User;

public interface  UserRepository extends JpaRepository<User, Integer>{
	
	User findUserByUsernameOrEmail(String username, String email);
	
	User findUserByUsernameAndPassword(String username, String password);
	
	User findUserById(Integer id);

}
