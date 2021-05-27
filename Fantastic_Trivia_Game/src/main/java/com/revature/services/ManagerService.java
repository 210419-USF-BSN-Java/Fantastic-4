package com.revature.services;

import com.revature.model.QuestionSet;

public interface ManagerService {
	
	public boolean editQuestionSet(QuestionSet newSet);//edit a question set
	public boolean removeQuestionSet(QuestionSet delSet);
	public boolean addQuestionSet(QuestionSet delSet);
	public boolean editAccountStatus(int statusId);//approve, deny, or ban an account
	
	
	
	

}
