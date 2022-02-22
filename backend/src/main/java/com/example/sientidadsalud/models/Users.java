package com.example.sientidadsalud.models;

import javax.persistence.*;

@Entity
@Table(name = "users")

public class Users {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private String lastname;
	@Column
	private String email;
	@Column
	private String role;
	
	@OneToOne(mappedBy = "user")
	private Patients patient;
	
	@OneToOne(mappedBy = "user")
	private Doctors doctors;
	
		public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
