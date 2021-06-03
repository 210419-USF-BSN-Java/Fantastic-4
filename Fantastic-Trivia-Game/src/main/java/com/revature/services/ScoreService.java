package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.QuestionSet;
import com.revature.models.Score;
import com.revature.repository.ScoreRepository;

@Service
public class ScoreService {
	
	private ScoreRepository sRepo;
	
	public ScoreService(){
		
	}
	
	@Autowired
	public ScoreService(ScoreRepository sRepo) {
		this.sRepo = sRepo;
	}

	public List<Score> showLeaderBoard() {
		
		return null;
	}

	public boolean submitScore(Score s) {
		
		return false;
	}
}
