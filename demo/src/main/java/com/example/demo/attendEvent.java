package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins="*")
@RestController
@RequestMapping("attendEvent")

public class attendEvent {
	String userEmail;
	String eventId;
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getEventId() {
		return eventId;
	}
	public void setEventId(String eventId) {
		this.eventId = eventId;
	}
	
	@PostMapping(consumes={MediaType.APPLICATION_JSON_VALUE}, produces= {MediaType.APPLICATION_JSON_VALUE})
	public String attendEvents(@RequestBody attendEvent ae) {
		
		System.out.print("I'm HERE");
		try (
	   			 Connection conn = DriverManager.getConnection(
	              		  "jdbc:mysql://localhost:3306/openevent?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
	                        "myuser", "xxxx");
	                
	                  Statement stmt = conn.createStatement();
	                ){
			System.out.print(ae.getUserEmail()+" "+ ae.getEventId());
			
			String query="insert into attendEvent values(?,?)";
			PreparedStatement pre=conn.prepareStatement(query);
			pre.setString(1, ae.getUserEmail());
			pre.setString(2, ae.getEventId());
			pre.execute();
				
			
		}catch (Exception e) {
	                	e.printStackTrace();
	                }
		
		
		return "Successfully Resgistered";
	}
}
