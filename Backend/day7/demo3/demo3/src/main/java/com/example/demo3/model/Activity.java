package com.example.demo3.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Activity {

    @Id
    @GeneratedValue
    private int adminid;
    private String email;
    private String name;
    private String contactnumber;
    public int getAdminid() {
        return adminid;
    }
    public void setAdminid(int adminid) {
        this.adminid = adminid;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getContactnumber() {
        return contactnumber;
    }
    public void setContactnumber(String contactnumber) {
        this.contactnumber = contactnumber;
    }
 
        
}
