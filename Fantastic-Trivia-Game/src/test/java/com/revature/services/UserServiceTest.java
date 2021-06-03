package com.revature.services;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.revature.models.User;
import com.revature.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest{

	@Autowired
	@Mock
	private UserRepository userRepo;
	
	private UserService userService;
	
	@Before
	public void init() {
		userService = new UserService(userRepo);
	}
	
	@Test
	public void searchByIdTest() {
		User u = new User(1,"test","test","test",0,0);
		assertNotNull(userService.searchUsersById(u.getId()));
		
	}
	
	

//	@Test
//	public void testUser() throws Exception {
//		mockMvc.perform(get("/users")).andExpect(status().isOk())
//				.andExpect(content().contentType("application/json;charset=UTF-8"))
//				.andExpect(jsonPath("$.id").value(1)).andExpect(jsonPath("$.username").value("testname"))
//				.andExpect(jsonPath("$.password").value("pass")).andExpect(jsonPath("$.email").value("test@test.com")).andExpect(jsonPath("$.roleid").value(1)).andExpect(jsonPath("$.statusid").value(1));
//
//	}

}
