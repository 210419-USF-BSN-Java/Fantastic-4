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
	
	// List all scores
	public List<Score> showLeaderBoardAll() {
		
		return sRepo.findAll();
	}
	
	// List score by set/category
	public List<Score> showLeaderBoardBySet(int setId){
		
		List<Score> sList = sRepo.findScoreBySetId(setId);
		 
		return sList;
	}
	
	// List scores by category
	public List<Score> showLeaderBoardByCategory(int categoryId){
		
		List<Score> sList = sRepo.findScoreBycategoryId(categoryId);
		 
		return sList;
	}
	
	// List scores by user
	public List<Score> showLeaderBoardByUser(int userId){
		
		List<Score> sList = sRepo.findScoreByUserId(userId);
		 
		return sList;
	}
	
	// calculate player score
	public int getScore(QuestionSet qSet, int correctAns) {
		int scorePoints = 0;
		int pValue = 0;
		int difficulty = qSet.getDifficultyId();
		if(difficulty == 1) {
			pValue = 10;
		}else if(difficulty == 2) {
			pValue = 20;
		}else if(difficulty == 3) {
			pValue = 40;
		}
		
		scorePoints = pValue * correctAns;
		return scorePoints;
	}
	
	// Player submit score
		public Score submitScore(Score s) {
			
			return sRepo.saveAndFlush(s);
	}
	
	// Manager delete score
	public int deleteScore(int scoreId) {
		
		Score score = sRepo.getById(scoreId);
		if(score != null) {
			sRepo.delete(score);
			return 1;
		} else {
			return 0;
		}
	}
}
