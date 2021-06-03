package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Score;

public interface ScoreRepository extends JpaRepository<Score, Integer>{
	
	List<Score> findScoreByUserId(int userId);
	
	List<Score> findScoreBySetId(int setId);
	
	Score findScoreById(int id);

}
