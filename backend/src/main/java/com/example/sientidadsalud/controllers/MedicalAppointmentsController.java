package com.example.sientidadsalud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.sientidadsalud.models.MedicalAppointments;
import com.example.sientidadsalud.services.MedicalAppointmentsService;
//import com.example.sientidadsalud.models.Clinics;
//import com.example.sientidadsalud.models.Doctors;
//import com.example.sientidadsalud.models.Patients;
//import com.example.sientidadsalud.models.Users;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/citas-medicas")
public class MedicalAppointmentsController {
	@Autowired
	MedicalAppointmentsService service;
	
	@GetMapping
	public List<MedicalAppointments>listar() {
		return service.listar();
	}
	
	@GetMapping("/cita/{id}")
	public MedicalAppointments listarId(@PathVariable int id) {
		return service.listarId(id);
	}
	
	@PutMapping("/add")
	public MedicalAppointments add(@RequestBody MedicalAppointments m) {
//		Patients patient = new Patients();
//		patient.setId(m.getPatient().getId());
//		patient.setAge(m.getPatient().getAge());
//		patient.setPhone(m.getPatient().getPhone());
//		patient.setAddress(m.getPatient().getAddress());
//		Users user = new Users();
//		user.setId(m.getPatient().getUser().getId());
//		user.setName(m.getPatient().getUser().getName());
//		user.setLastname(m.getPatient().getUser().getLastname());
//		user.setEmail(m.getPatient().getUser().getEmail());
//		user.setRole(m.getPatient().getUser().getRole());		
//		patient.setUser(user);
//		Doctors doctor = new Doctors();
//		doctor.setId(m.getDoctor().getId());
//		Users user2 = new Users();
//		user2.setId(m.getDoctor().getUser().getId());
//		user2.setName(m.getDoctor().getUser().getName());
//		user2.setLastname(m.getDoctor().getUser().getLastname());
//		user2.setEmail(m.getDoctor().getUser().getEmail());
//		user2.setRole(m.getDoctor().getUser().getRole());
//		doctor.setUser(user2);
//		Clinics clinic = new Clinics();
//		clinic.setId(m.getClinic().getId());
//		clinic.setDepartment(m.getClinic().getDepartment());
//		clinic.setMunicipality(m.getClinic().getMunicipality());
//		clinic.setAddress(m.getClinic().getAddress());
//		m.setPatient(patient);
//		m.setDoctor(doctor);
//		m.setClinic(clinic);
		return service.add(m);
	}
	
	@PutMapping("/edit/{id}")
	public MedicalAppointments edit(@RequestBody MedicalAppointments m, @PathVariable int id) {
		m.setId(id);
		return service.edit(m);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
}
