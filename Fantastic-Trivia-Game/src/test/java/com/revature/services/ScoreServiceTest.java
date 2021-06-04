package com.revature.services;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.revature.models.Score;
import com.revature.repository.ScoreRepository;

//all pass
public class ScoreServiceTest {
	
	@Mock
	private ScoreRepository sRepo = Mockito.mock(ScoreRepository.class);
	
	@InjectMocks
	private ScoreService sServ = new ScoreService(sRepo);
	
	Score s = new Score(1,1,1,1);
	List<Score> sList = new ArrayList<>();
	
	
	@Test
	public void showLeaderBoardAllTest() {
		sList.add(s);
		
		Mockito.when(sServ.showLeaderBoardAll()).thenReturn(sList);
		assertEquals(sList,sServ.showLeaderBoardAll());
		
	}
	@Test
	public void showLeaderBoardBySetTest() {
		sList.add(s);
		int id = 1;
		Mockito.when(sServ.showLeaderBoardBySet(id)).thenReturn(sList);
		assertEquals(sList,sServ.showLeaderBoardBySet(id));
		
	}
	
	@Test
	public void submitScoreTest() {
		Mockito.when(sServ.submitScore(s)).thenReturn(s);
		assertEquals(s,sServ.submitScore(s));
		
	}
	@Test
	public void deleteScoreTest() {
		int id = 1;
		Mockito.when(sServ.deleteScore(id)).thenReturn(1);
		Mockito.doNothing().when(sRepo).delete(s);
		
	}

}
