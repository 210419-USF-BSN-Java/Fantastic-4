package com.revature.model;

import java.util.List;

public class Question {
	//this is for the questions themselves
	
	public int categoryId;
	public int questionType;
	public int difficulty;
	public String question;
	public String rightAnswer;
	public List<String> wrongAnswers;

}
