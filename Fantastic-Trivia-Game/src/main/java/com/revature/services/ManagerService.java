package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.QuestionSet;

import com.revature.repository.ManagerRepository;

import com.revature.repository.QuestionSetRepository;


@Service
public class ManagerService {
	

	private ManagerRepository mRepo;

	private QuestionSetRepository qRepo;

	
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

	public ManagerService(QuestionSetRepository qRepo) {
		this.qRepo = qRepo;
	}

	// edit a question set
	public String editQuestionSet(QuestionSet editSet) {


		return null;
	}


	public boolean removeQuestionSet(Integer id) {
		return false;
	}

	public String removeQuestionSet(QuestionSet delSet) {


		return null;
	}


	public boolean addQuestionSet(QuestionSet newSet) {

		return false;
	}
	public String addQuestionSet(int categoryId, int numQuestions, int difficultyId){
		try{
			qRepo.save(new QuestionSet(categoryId,numQuestions,difficultyId));
			return "Question Set added Succesfully";
		}catch(Exception e) {
			return "Question Set was not added Succesfully";
		}

	}

	// approve, deny, or ban an account
	public boolean editAccountStatus(Integer statusId, Integer userId) {

		return false;
	}

}
