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
	
	// Manager edit a question set
		public String editQuestionSet(QuestionSet editSet) {

			return null;
		}

	// Manager remove a question set
		public String removeQuestionSet(QuestionSet delSet) {

			return null;
		}
		
	// Manager add a question set
		public QuestionSet addQuestionSet(int categoryId, int numQuestions, int difficultyId){
			
			return qRepo.saveAndFlush(new QuestionSet(categoryId,numQuestions,difficultyId));
		}
	
	// can view all question sets
		public List<QuestionSet> viewAllQuestionSets() {
			
			return qRepo.findAll();
		}
		
	// Player Selects Question Set
		public QuestionSet selectQuestionSet(int id) {
			QuestionSet qSet = qRepo.getById(id);
			
			return qSet;
		}
		
	// This is the service to get questions from API
		public String getQuestionsFromSet(QuestionSet qSet) {
			
			int categoryId = qSet.getCategoryId();
			int difficultyId = qSet.getDifficultyId();
			int numQuestions = qSet.getNumQuestions();
			
			
			
			return null;
		}

}
