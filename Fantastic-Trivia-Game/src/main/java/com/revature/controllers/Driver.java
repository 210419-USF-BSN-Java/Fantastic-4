package com.revature.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.models.QuestionPool;

public class Driver {

	public static void main(String[] args) {
		
		RestTemplate rt = new RestTemplate();
		
		//QuestionPool response = rt.getForObject("https://opentdb.com/api.php?amount=15&category=17&difficulty=medium&type=multiple", QuestionPool.class);
		
		int numQuestions = 10;
		int categoryId = 17;
		String setDifficulty = "medium";
		
		QuestionPool response = rt.getForObject("https://opentdb.com/api.php?amount="+numQuestions+"&category="+categoryId+"&difficulty="+setDifficulty+"&type=multiple", QuestionPool.class);
		
	   //List<Results> qList = new ArrayList<>();
		
		System.out.println(response);
		
		
		
		
		

	}

}
