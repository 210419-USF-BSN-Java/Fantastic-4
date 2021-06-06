package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.QuestionPool;
import com.revature.models.QuestionSet;
import com.revature.models.Score;
import com.revature.services.QuestionService;
import com.revature.services.ScoreService;

@CrossOrigin
@RestController
@RequestMapping(value = "/question-set")
public class QuestionSetController {

	private QuestionService qServ;
	private ScoreService sServ;

	@Autowired
	public QuestionSetController(QuestionService serv, ScoreService sServ) {
		this.qServ = serv;
		this.sServ = sServ;
	}

	@GetMapping
	public ResponseEntity<List<QuestionSet>> getAllQuestionSets() {

		List<QuestionSet> retrieved = qServ.viewAllQuestionSets();
		return new ResponseEntity<List<QuestionSet>>(retrieved, HttpStatus.OK);
	}
	
	@GetMapping(value = "/category/{categoryId}")
	public ResponseEntity<List<QuestionSet>> getQuestionSetsByCategoryId(@PathVariable("categoryId") Integer categoryId) {

		List<QuestionSet> retrieved = qServ.getQuestionSetByCategory(categoryId);
		return new ResponseEntity<List<QuestionSet>>(retrieved, HttpStatus.OK);
	}
	
	@GetMapping(value = "/difficulty/{difficultyId}")
	public ResponseEntity<List<QuestionSet>> getQuestionSetsByDifficultyId(@PathVariable("difficultyId") Integer difficultyId) {

		List<QuestionSet> retrieved = qServ.getQuestionSetByDifficulty(difficultyId);
		return new ResponseEntity<List<QuestionSet>>(retrieved, HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<QuestionPool> GetQuestionsQuestionSetById(@PathVariable("id") Integer id) {


		QuestionPool retrieved = qServ.getQuestionsFromSet(id);

		return new ResponseEntity<QuestionPool>(retrieved, HttpStatus.OK);
	}

	@PostMapping(value = "/{id}/score")
	public ResponseEntity<Score> SaveScore(@RequestParam(name = "score") int score,
			@RequestParam(name = "userId") int userId, @RequestParam(name = "categoryId") int categoryId,
			@RequestParam(name = "rank") int rank, @PathVariable("setId") Integer setId) {

		Score retrieved = sServ.submitScore(new Score(score, userId, setId, rank, categoryId));
		return new ResponseEntity<Score>(retrieved, HttpStatus.OK);
	}

	@PostMapping(value = "/new-game")
	public ResponseEntity<QuestionSet> newGame(@RequestParam(name = "categoryId") int categoryId,
			@RequestParam(name = "numQuestions") int numQuestions,
			@RequestParam(name = "difficultyId") int difficultyId) {

		QuestionSet retrieved = qServ.addQuestionSet(categoryId, numQuestions, difficultyId);
		return new ResponseEntity<QuestionSet>(retrieved, HttpStatus.OK);
	}

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<String> DeleteQuestionSet(@PathVariable("id") Integer id) {

		int retrieved = qServ.removeQuestionSet(id);
		String response = "Delete Successful " + retrieved;
		return new ResponseEntity<String>(response, HttpStatus.OK);
	}

}
