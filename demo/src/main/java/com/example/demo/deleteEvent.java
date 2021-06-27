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
@RequestMapping("deleteEvent")

public class deleteEvent {
	String email;
	String eventId;
	
	
	
	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getEventId() {
		return eventId;
	}



	public void setEventId(String eventId) {
		this.eventId = eventId;
	}



	@PostMapping(consumes={MediaType.APPLICATION_JSON_VALUE}, produces= {MediaType.APPLICATION_JSON_VALUE})
	public void deleteEvents(@RequestBody deleteEvent d) {
		
		
		try (
	   			 Connection conn = DriverManager.getConnection(
	              		  "jdbc:mysql://localhost:3306/openevent?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
	                        "myuser", "xxxx");
	                
	                  Statement stmt = conn.createStatement();
	                ){
			System.out.println("@@@@@@@@ "+ d.getEmail()+" ^^^^^^^^^^ "+d.getEventId());
			String query="delete from userEvents where email=? and eventId=?";
			PreparedStatement pre=conn.prepareStatement(query);
			pre.setString(1, d.getEmail());
			pre.setString(2, d.getEventId());
			pre.execute();
			
			System.out.println("Successful Deletion from userEvents ");
			
			
			query="delete from event where EventId=?";
			pre=conn.prepareStatement(query);
			pre.setString(1, d.getEventId());
			pre.execute();
			
			System.out.println("Successful Deletion from Event table ");
		}catch(Exception e) {
	                	
	                }
	}
}
