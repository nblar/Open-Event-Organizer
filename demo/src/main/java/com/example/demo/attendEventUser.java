package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("attendedEvent")


public class attendEventUser {
	
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
	public ResponseEntity<?> attendEvents(@RequestBody attendEvent ae) {
		
		
		try (
	   			 Connection conn = DriverManager.getConnection(
	              		  "jdbc:mysql://localhost:3306/openevent?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
	                        "myuser", "xxxx");
	                
	                  Statement stmt = conn.createStatement();
	                ){
			String query="select count(*) from attendEvent where userEmail=? and eventId=?";
			PreparedStatement pre=conn.prepareStatement(query);
			pre.setString(1, ae.getUserEmail());
			pre.setString(2, ae.getEventId());
			ResultSet rs=pre.executeQuery();
			
			while(rs.next()) {
				return new ResponseEntity<>(null, HttpStatus.ACCEPTED);//202
			}
			
		}catch(Exception e) {
	                	e.printStackTrace();
	                }
		
		 return new ResponseEntity<>(null, HttpStatus.NO_CONTENT); //204
	}
}
