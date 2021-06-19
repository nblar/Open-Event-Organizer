package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import user_details.event_details;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("returnDetails")



public class event_details_return {

      @GetMapping
      public HashMap<Integer, ArrayList<Object>> returnData() {
    	  String str= "select * from event";
    
    	  
    	  HashMap<Integer, ArrayList<Object>> map= new HashMap<Integer, ArrayList<Object>>();
    	  
    	  try (
 	   			 Connection conn = DriverManager.getConnection(
 	              		  "jdbc:mysql://localhost:3306/openevent?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
 	                        "myuser", "xxxx");
 	                
 	                  Statement stmt = conn.createStatement();
 	                ){
    		  
    		  
    		  int i=1;
     		 ResultSet rset2=stmt.executeQuery(str);
     		 while(rset2.next()) {
     			 
     			 ArrayList<Object> l =new ArrayList<>();
     			 
     			 for(int j=1;j<=14;j++) {
     				 if(j!=3)
     			   l.add(rset2.getString(j));
     				 else
     			   l.add(rset2.getInt(j));
     			 }
     			 
     			 map.put(i, l);
     			 i++;
     		 }
    		  
     		 //System.out.println(map);
    	  }catch(Exception e) {
    		  
    	  }
    	  
    	  return map;
      }
	
}
