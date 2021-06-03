package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.QuestionSet;
import com.revature.repository.QuestionSetRepository;

@Service
public class QuestionService {
	
	private QuestionSetRepository qRepo;
	
	public QuestionService(){
		
	}
	
	@Autowired
	public QuestionService(QuestionSetRepository qRepo) {
		this.qRepo = qRepo;
	}
	
	// can view a specific set from it
		public List<QuestionSet> viewAllQuestionSets() {
			
			return null;
		}
		
	// This is the service to get questions from API
		public String getQuestionsFromSet(QuestionSet questionSet) {
			
			return null;
		}

}
