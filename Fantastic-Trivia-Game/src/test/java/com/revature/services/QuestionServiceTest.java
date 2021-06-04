package com.revature.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.revature.models.QuestionPool;
import com.revature.models.QuestionSet;
import com.revature.models.User;
import com.revature.repository.QuestionSetRepository;
import com.revature.repository.UserRepository;

class QuestionServiceTest {
	
	@Mock
	private QuestionSetRepository qRepo = Mockito.mock(QuestionSetRepository.class);
	
	@InjectMocks
	private QuestionService qServ = new  QuestionService(qRepo);
	
	QuestionSet qs = new QuestionSet(1,10,2);
	
	@Test
	public void editQuestionSetTest() {
		int id = 1;
		String choice = "Category";
		int update = 2;

		
		Mockito.when(qRepo.findQuestionSetById(id)).thenReturn(qs);
		qs.setCategoryId(update);
		Mockito.when(qServ.editQuestionSet(id, choice, update)).thenReturn(qs);
		
		assertEquals(qs,qServ.editQuestionSet(id, choice, update));

	}
	
	@Test
	public void removeQuestionSetTest() {
		int id = 1;
		Mockito.when(qRepo.getById(id)).thenReturn(qs);
		Mockito.doNothing().when(qRepo).delete(qs);
		assertEquals(1,qServ.removeQuestionSet(id));
	}
	
	@Test
	public void addQuestionSetTest() {
		int catId = qs.getCategoryId();
		int numQues = qs.getNumQuestions();
		int diff = qs.getDifficultyId();
		
		Mockito.when(qServ.addQuestionSet(catId, numQues, diff)).thenReturn(qs);
		
		assertEquals(qs,qServ.addQuestionSet(catId, numQues, diff));
		
	}
	
	@Test
	public void viewAllQuestionSetsTest() {
		List<QuestionSet> qList = new ArrayList<>();
		qList.add(qs);
		Mockito.when(qServ.viewAllQuestionSets()).thenReturn(qList);
		assertEquals(qList,qServ.viewAllQuestionSets());
	}
	
	@Test
	public void selectQuestionSetTest() {
		int id = 1;
		Mockito.when(qServ.selectQuestionSet(id)).thenReturn(qs);
		assertEquals(qs,qServ.selectQuestionSet(id));
		
	}
	
	@Test
	public void getQuestionsFromSetTest() {
		
		int id = 1;
		
		QuestionPool qp = new QuestionPool();
		//roadblock for now
	}
	

}
