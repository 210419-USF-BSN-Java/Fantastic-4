package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Score;
import com.revature.services.QuestionService;
import com.revature.services.ScoreService;

@CrossOrigin
@RestController
@RequestMapping(value = "/leaderboard")
public class LeaderboardController {

	private QuestionService qServ;
	private ScoreService sServ;

	@Autowired
	public LeaderboardController(QuestionService serv, ScoreService sServ) {
		this.qServ = serv;
		this.sServ = sServ;
	}
	
	@GetMapping
	public ResponseEntity<List<Score>> getAllScores() {

		List<Score> retrieved = sServ.showLeaderBoardAll();
		return new ResponseEntity<List<Score>>(retrieved, HttpStatus.OK);
	}
	
	
	@GetMapping(value = "/category/{categoryId}")
	public ResponseEntity<List<Score>> getScoreByCategory(@PathVariable("categoryId") Integer categoryId) {

		List<Score> retrieved = sServ.showLeaderBoardByCategory(categoryId);
		return new ResponseEntity<List<Score>>(retrieved, HttpStatus.OK);
	}
	
	
	@GetMapping(value = "/user/{userId}")
	public ResponseEntity<List<Score>> getScoreByUser(@PathVariable("userId") Integer userId) {

		List<Score> retrieved = sServ.showLeaderBoardByUser(userId);
		return new ResponseEntity<List<Score>>(retrieved, HttpStatus.OK);
	}
	
	@GetMapping(value = "/set/{setId}")
	public ResponseEntity<List<Score>> getScoreByQuestionSet(@PathVariable("setId") Integer setId) {

		List<Score> retrieved = sServ.showLeaderBoardBySet(setId);
		return new ResponseEntity<List<Score>>(retrieved, HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<String> removeScore(@PathVariable("id") Integer id) {

		int retrieved = sServ.deleteScore(id);
		String response = "Delete Successful:" + retrieved;
		return new ResponseEntity<String>(response, HttpStatus.OK);
	}
}
