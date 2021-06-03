package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.QuestionSet;
import com.revature.models.User;
import com.revature.repository.QuestionSetRepository;
import com.revature.repository.UserRepository;

@Service
public class PlayerService {
	
	private QuestionSetRepository qRepo; 
	private UserRepository uRepo;
	
	public PlayerService() {
		
	}
	
	@Autowired
	public PlayerService(QuestionSetRepository qRepo) {
		this.qRepo = qRepo;
	}
	
	@Autowired
	public PlayerService(UserRepository uRepo) {
		this.uRepo = uRepo;
	}

	public QuestionSet selectQuestionSet(int id) {
		
		return null;
	}

	public boolean updateProfile(User u) {
		
		return false;
	}
}
