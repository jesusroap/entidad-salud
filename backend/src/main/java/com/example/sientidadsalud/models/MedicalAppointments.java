package com.example.sientidadsalud.models;

import javax.persistence.*;

@Entity
@Table(name = "medical_appointments")

public class MedicalAppointments {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column
	private String date;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "id_patient", referencedColumnName = "id")
	private Patients patient;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "id_doctor", referencedColumnName = "id")
	private Doctors doctor;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "id_clinic", referencedColumnName = "id")
	private Clinics clinic;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Patients getPatient() {
		return patient;
	}

	public void setPatient(Patients patient) {
		this.patient = patient;
	}
	public Doctors getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctors doctor) {
		this.doctor = doctor;
	}
	public Clinics getClinic() {
		return clinic;
	}

	public void setClinic(Clinics clinic) {
		this.clinic = clinic;
	}
}
