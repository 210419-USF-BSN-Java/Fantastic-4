package com.revature.services;

import com.revature.model.QuestionSet;
import com.revature.model.User;

public interface PlayerService {
	
	public QuestionSet selectQuestionSet(int id);
	public boolean updateProfile(User u);
	

}
