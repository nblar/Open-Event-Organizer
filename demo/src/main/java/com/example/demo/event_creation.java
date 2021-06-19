package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import user_details.event_details;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("eventRegister")
public class event_creation {
      
	@PostMapping(consumes={MediaType.APPLICATION_JSON_VALUE}, produces= {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<?> Register_event(@RequestBody event_details input) {
		event_details u = new event_details();
		
		u.setEventname(input.getEventname());
		u.setCategory(input.getCategory());
		u.setEmail(input.getEmail());
		u.setEndtime(input.getEndtime());
		u.setStarttime(input.getStarttime());
		u.setFee(input.getFee());
		u.setVenue(input.getVenue());
		u.setEventtype(input.getEventtype());
		u.setDate(input.getDate());
		u.setEndDate(input.getEndDate());
		u.setDescription(input.getDescription());
		u.setImgUrl1(input.getImgUrl1());
		u.setImgUrl2(input.getImgUrl2());
		
		  String result=u.entry();
		  
		  if(result.equals("success"))
			  return new ResponseEntity<>(null, HttpStatus.ACCEPTED); //202
		  
		  
		 return new ResponseEntity<>(null, HttpStatus.NO_CONTENT); //204
	}
}
