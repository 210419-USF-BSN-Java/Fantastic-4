package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.revature.models.QuestionPool;
import com.revature.models.QuestionSet;
import com.revature.repository.QuestionSetRepository;

@Service
public class QuestionService {
	
	private QuestionSetRepository qRepo;
	
	public QuestionService(){
		
	}
	
	@Autowired
	public QuestionService(QuestionSetRepository repo) {
		this.qRepo = repo;
	}
	
	// Manager edit a question set returns edited set
		public QuestionSet editQuestionSet(int setId, String choice, int update) {
            QuestionSet editSet = qRepo.findQuestionSetById(setId);
            
            if(choice.equals("NumQuestions")) {
            	editSet.setNumQuestions(update);
            }else if(choice.equals("Category")) {
            	editSet.setCategoryId(update);
            }else if(choice.equals("Difficulty")) {
            	editSet.setDifficultyId(update);
            }
            
			return qRepo.saveAndFlush(editSet); //Is this updated in database?
		}

	// Manager remove a question set
		public int removeQuestionSet(int setId) {
			
			QuestionSet qSet = qRepo.getById(setId);
			if(qSet != null) {
				qRepo.delete(qSet);
				return 1;
			} else {
				return 0;
			}
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
		
	// This is the service to get questions from API returns the question pool results.
		public ResponseEntity<String> getQuestionsFromSet(int setId) {
			
			QuestionSet qSet = qRepo.getById(setId);
			int categoryId = qSet.getCategoryId();
			int difficultyId = qSet.getDifficultyId();
			int numQuestions = qSet.getNumQuestions();
			
			String setDiff = null;
			if(difficultyId == 1){
				setDiff = "easy";
			}else if(difficultyId == 2) {
				setDiff = "medium";
			}else if(difficultyId == 3) {
				setDiff = "hard";
			}
			
			RestTemplate rt = new RestTemplate();
			
			String apiURL = "https://opentdb.com/api.php?amount="+numQuestions+"&category="+categoryId+"&difficulty="+setDiff+"&type=multiple";
			
			return new ResponseEntity<String>(apiURL, HttpStatus.OK);
		}
		
		//Is this not the same as select question set?
		public QuestionSet getQuestionSetById(int id) {
			try {
				return qRepo.findQuestionSetById(id);
			} catch (Exception e) {
				return null;
			}
		}
		
		//List question set by category
		public List<QuestionSet> getQuestionSetByCategory(int categoryId) {
			try {
				return qRepo.findQuestionSetByCategoryId(categoryId);
			} catch (Exception e) {
				return null;
			}
		}
		
		public List<QuestionSet> getQuestionSetByDifficulty(int difficultyId){
			
			try {
				return qRepo.findQuestionSetByDifficultyId(difficultyId);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return null;
			}
			
		}
		

}
