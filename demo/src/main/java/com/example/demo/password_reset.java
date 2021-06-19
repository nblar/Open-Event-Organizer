package com.example.demo;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

import org.bouncycastle.util.encoders.Hex;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import user_details.loginEntity;
import user_details.signup_details;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/reset")
public class password_reset {

	
	@PostMapping(consumes={MediaType.APPLICATION_JSON_VALUE}, produces= {MediaType.APPLICATION_JSON_VALUE})
	public String reset(@RequestBody loginEntity resetPassword) {
		
		try {
			resetPassword(resetPassword);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "Successfully reseted";
	}
	
	public static void resetPassword(loginEntity resetPassword) throws Exception {
		
		String email=resetPassword.getEmail();
		String pass=resetPassword.getPassword();
		
		 MessageDigest digest = MessageDigest.getInstance("SHA-256");
		 byte[] hash = digest.digest(
		   pass.getBytes(StandardCharsets.UTF_8));
		 String sha256hex = new String(Hex.encode(hash));
		 
		String query="update user set password=? where email=?";
		
		
		 try (
    			 Connection conn = DriverManager.getConnection(
               		  "jdbc:mysql://localhost:3306/openevent?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
                         "myuser", "xxxx");
                 
                   Statement stmt = conn.createStatement();
                 ){
			 
			 			PreparedStatement pre=conn.prepareStatement(query); 
			 			pre.setString(1, sha256hex);
			 			pre.setString(2, email);
			 			
			 			pre.execute();
			 			System.out.print("RAN SUCCESFULLY");
			 			
			 			query="update login set Password=? where email=?";
			 			pre=conn.prepareStatement(query);
			 			pre.setString(1, sha256hex);
			 			pre.setString(2, email);
			 			
			 			pre.execute();
						System.out.print("RAN SUCCESFULLY TILL LAST");
			 			
		 } catch(Exception e) {e.printStackTrace();}
	}
}
