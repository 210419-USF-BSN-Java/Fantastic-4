package com.revature.controllers;

import org.springframework.web.client.RestTemplate;

import com.revature.models.QuestionPool;
import com.revature.models.QuestionSet;
import com.revature.services.QuestionService;

public class Driver {

	public static void main(String[] args) {
		
		RestTemplate rt = new RestTemplate();
		QuestionService qServ = new QuestionService();
		
	    //QuestionPool response = rt.getForObject("https://opentdb.com/api.php?amount=15&category=17&difficulty=medium&type=multiple", QuestionPool.class);
		
		int numQuestions = 10;
		int categoryId = 17;
		int difficultyId = 2;
		QuestionSet qSet = new QuestionSet();
		qSet.setCategoryId(categoryId);
		qSet.setDifficultyId(difficultyId);
		qSet.setNumQuestions(numQuestions);
		
	    //String qPool = qServ.getQuestionsFromSet(1);
	   // System.out.println(qPool.toString());
		
		
		//QuestionPool response = rt.getForObject("https://opentdb.com/api.php?amount="+numQuestions+"&category="+categoryId+"&difficulty="+setDifficulty+"&type=multiple", QuestionPool.class);
		
	   //List<Results> qList = new ArrayList<>();
		
		//System.out.println(response);
		
		
		
		
		

	}

}
