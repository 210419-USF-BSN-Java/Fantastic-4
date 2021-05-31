package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.QuestionSet;
import com.revature.repository.ManagerRepository;

@Service
public class ManagerService {
	
	private ManagerRepository mRepo;
	
	public ManagerService() {
		
	}
	
	@Autowired
	public ManagerService(ManagerRepository mRepo) {
		this.mRepo = mRepo;
	}

	// edit a question set
	public boolean editQuestionSet(QuestionSet newSet, Integer id) {

		return false;
	}

	public boolean removeQuestionSet(Integer id) {

		return false;
	}

	public boolean addQuestionSet(QuestionSet newSet) {

		return false;
	}

	// approve, deny, or ban an account
	public boolean editAccountStatus(Integer statusId, Integer userId) {

		return false;
	}

}
