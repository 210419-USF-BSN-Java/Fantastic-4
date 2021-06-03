package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.QuestionSet;
import com.revature.models.QuestionSetCategory;
import com.revature.models.QuestionSetDifficulty;

public interface QuestionSetRepository extends JpaRepository<QuestionSet, Integer>{
	
	List<QuestionSet> findQuestionSetByCategoryId(int categoryId);
	
	List<QuestionSet> findQuestionSetByDifficultyId(int difficultyId);
	
	QuestionSetCategory findQuestionSetCategoryById(int id);
	
	QuestionSetDifficulty findQuestionSetDifficultyById(int id);
	
	QuestionSet findQuestionSetById(int id);

}
