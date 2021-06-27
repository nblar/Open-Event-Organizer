package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("displayAttendedEvents")

public class displayAttendedEvents {

	
	String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	@PostMapping(consumes={MediaType.APPLICATION_JSON_VALUE}, produces= {MediaType.APPLICATION_JSON_VALUE})
	public HashMap<Integer, ArrayList<Object>> entry(@RequestBody userDashboard ud) {
		
		 ArrayList<Object> l= new ArrayList<>(); int i=0;
		 HashMap<Integer, ArrayList<Object>> map= new HashMap<Integer, ArrayList<Object>>();
		try (
	   			 Connection conn = DriverManager.getConnection(
	              		  "jdbc:mysql://localhost:3306/openevent?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
	                        "myuser", "xxxx");
	                
	                  Statement stmt = conn.createStatement();
	                ){
			String query= "select * from attendEvent where userEmail=?";
			
			 PreparedStatement pre=conn.prepareStatement(query);
			 pre.setString(1, ud.getEmail());
			 
			 ResultSet rs=pre.executeQuery();
		
			 query="select * from event where EventId=?";
			 pre=conn.prepareStatement(query);
			 

			 while(rs.next()) {
				 
				
				 pre.setString(1, rs.getString("eventId"));
				
				 ResultSet rset= pre.executeQuery();
				
				 
				 while(rset.next()) {
					 for(int j=1;j<=15;j++) {
	     			   l.add(rset.getString(j));
	     			 }
				 }
				 
				 
				 map.put(i, new ArrayList<>(l));

     			 i++;
     			 l.clear();
				 
			 }
			
		} catch(Exception e) {
	                	e.printStackTrace();
	                }
		
		return map;
	}
}
