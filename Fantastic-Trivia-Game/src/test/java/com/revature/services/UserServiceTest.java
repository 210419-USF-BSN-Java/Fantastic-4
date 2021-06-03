package com.revature.services;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.revature.models.User;
import com.revature.repository.UserRepository;


public class UserServiceTest{


	@Mock
	private UserRepository userRepo = Mockito.mock(UserRepository.class);

	@InjectMocks
	private UserService userService = new UserService(userRepo);

	User u = new User("test","test","test",1,1);
	
	
	@Test
	public void searchByIdTest() {
		
		int id = 1;
		
		Mockito.when(userService.searchUsersById(id)).thenReturn(u);
		
		assertEquals(u,userService.searchUsersById(id));
		
	}//passed
	
	
	@Test
	public void logInTest() {
		String username = "test";
		String password = "test";
		
		Mockito.when(userService.logIn(username, password)).thenReturn(u);
		
		assertEquals(u,userService.logIn(username, password));
	}// pass
	
	
	@Test
	public void saveUserTest() {
		Mockito.when(userService.saveUser(u)).thenReturn(u);
		assertEquals(u,userService.saveUser(u));
	}
	
	@Test
	public void banUserTest() {
		int id = 1;
		
		u.setStatusId(2);
		Mockito.when(userService.banUser(id)).thenReturn(u);
		assertEquals(u,userService.banUser(id));
	}//passed

	@Test
	public void permitUserTest() {
		int id = 1;
		u.setStatusId(1);
		Mockito.when(userService.permitUser(id)).thenReturn(u);
		assertEquals(u,userService.permitUser(id));
	}
	
	@Test
	public void deleteUserTest() {
		int id = 1;
		Mockito.when(userService.deleteUser(id)).thenReturn(1);
		assertEquals(1, userService.deleteUser(id));
	}
	
	@Test
	public void getAllUsersTest() {
		List<User> uList = new ArrayList<>();
		uList.add(u);
		Mockito.when(userService.getAllUsers()).thenReturn(uList);
		assertEquals(uList,userService.getAllUsers());
	}


}
