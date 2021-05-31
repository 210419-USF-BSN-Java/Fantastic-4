package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.models.QuestionSet;


public interface ManagerRepository extends JpaRepository<QuestionSet, Integer> {
	
	@Query("UPDATE ")
	boolean editQuestionSet(QuestionSet editSet, Integer id);
	
	@Query("DELETE")
	boolean removeQuestionSet(Integer id);
	
	@Query("INSERT")
	boolean addQuestionSet(QuestionSet newSet);
	
	@Query("UPDATE")
	boolean editAccountStatus(Integer statusId,Integer userId);

}
