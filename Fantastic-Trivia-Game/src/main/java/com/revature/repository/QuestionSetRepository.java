package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.QuestionSet;

public interface QuestionSetRepository extends JpaRepository<QuestionSet, Integer>{
	
	<List>QuestionSet findQuestionSetByCategoryId(int categoryId);
	
	<List>QuestionSet findQuestionSetByDifficultyId(int difficultyId);
	
	QuestionSet findQuestionSetById(int id);

}
