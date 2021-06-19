package user_details;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class event_details {

	String eventname;
	String eventtype;
	String category;
	String venue;
	String starttime;
	String endtime;
	String fee;
	String email;
	String date;
	String endDate;
	String description;
	String imgUrl1;
	String imgUrl2;
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getEventname() {
		return eventname;
	}

	public void setEventname(String eventname) {
		this.eventname = eventname;
	}

	public String getEventtype() {
		return eventtype;
	}

	public void setEventtype(String eventtype) {
		this.eventtype = eventtype;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getFee() {
		return fee;
	}

	public void setFee(String fee) {
		this.fee = fee;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getImgUrl1() {
		return imgUrl1;
	}

	public void setImgUrl1(String imgUrl1) {
		this.imgUrl1 = imgUrl1;
	}

	public String getImgUrl2() {
		return imgUrl2;
	}

	public void setImgUrl2(String imgUrl2) {
		this.imgUrl2 = imgUrl2;
	}



	String Eid = RandomStringUtils.randomAlphanumeric(25);
     
	public String entry() {
		
		String str="insert into event values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		String query="select Id from login where email=?";
		Integer id=0;
		try (
	   			 Connection conn = DriverManager.getConnection(
	              		  "jdbc:mysql://localhost:3306/openevent?allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC",
	                        "myuser", "xxxx");
	                
	                  Statement stmt = conn.createStatement();
	                ){
			 PreparedStatement pre=conn.prepareStatement(query);
			 pre.setString(1, email);
			 
			 ResultSet rset=pre.executeQuery();
			 
			 if(rset.next()==false)
				return "error";
			 else {
				 // rset.next();
				 id=rset.getInt("Id");
			 }
			 
			 pre=conn.prepareStatement(str);
			 pre.setString(1, Eid);
			 pre.setString(2, eventname);
			 pre.setInt(3,id);
			 pre.setString(4, eventtype);
			 pre.setString(5, category);
			 pre.setString(6, venue);
			 pre.setString(7, starttime);
			 pre.setString(8, endtime);
			 pre.setString(9, fee);
			 pre.setString(10,date);
			 pre.setString(11, endDate);
			 pre.setString(12, description);
			 pre.setString(13, imgUrl1);
			 pre.setString(14, imgUrl2);
			 
			 pre.execute();
				 
			 
		}catch(Exception e) {
			e.printStackTrace();
		}
		 return "success";
	}
	
}
