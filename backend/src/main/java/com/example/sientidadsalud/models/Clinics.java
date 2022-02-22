package com.example.sientidadsalud.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "clinics")

public class Clinics {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String department;
	@Column
	private String municipality;
	@Column
	private String address;
	
	@OneToMany( mappedBy = "clinic", cascade = CascadeType.ALL)
	private Set<MedicalAppointments> MedicalAppointment = new HashSet<MedicalAppointments>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getMunicipality() {
		return municipality;
	}

	public void setMunicipality(String municipality) {
		this.municipality = municipality;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
