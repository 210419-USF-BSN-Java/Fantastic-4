package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.services.ManagerService;

@Controller
@RequestMapping(value = "/manager")
public class ManagerController {

	private ManagerService mServ;
	
	@Autowired
	public ManagerController(ManagerService serv) {
		this.mServ = serv;
	}

	
	
}
