package com.revature.services;

import java.util.List;

import com.revature.model.QuestionSet;
import com.revature.model.Score;

public interface SystemService {
	
	
	public List<Score> showLeaderBoard();
	public List<QuestionSet> viewAllQuestionSets();//can view a specific set from it
	public boolean submitScore(Score s);
	
	

}
