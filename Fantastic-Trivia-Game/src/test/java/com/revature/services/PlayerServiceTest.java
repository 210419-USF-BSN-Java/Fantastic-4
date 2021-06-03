package com.revature.services;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import com.revature.models.QuestionSet;
import com.revature.models.User;
import com.revature.repository.QuestionSetRepository;
import com.revature.repository.UserRepository;

class PlayerServiceTest {
	
	@Mock
	private UserRepository uRepo = Mockito.mock(UserRepository.class);

	@Mock
	private QuestionSetRepository qRepo = Mockito.mock(QuestionSetRepository.class);
	
	@InjectMocks
	private PlayerService pQServ = new PlayerService(qRepo);
	
	@InjectMocks
	private PlayerService pUServ = new PlayerService(uRepo);
	
	
	User u = new User();
	
	QuestionSet qs = new QuestionSet();

}
