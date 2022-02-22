package com.example.sientidadsalud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sientidadsalud.models.Patients;
import com.example.sientidadsalud.services.PatientsService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/pacientes")
public class PatientsController {
	@Autowired
	PatientsService service;
	
	@GetMapping
	public List<Patients>listar() {
		return service.listar();
	}
	
	@GetMapping("/paciente/{id}")
	public Patients listarId(@PathVariable int id) {
		return service.listarId(id);
	}
	
	@PostMapping("/add")
	public Patients add(@RequestBody Patients p) {
		return service.add(p);
	}
	
	@PutMapping("/edit/{id}")
	public Patients edit(@RequestBody Patients p, @PathVariable int id) {
		p.setId(id);
		return service.edit(p);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
	 
}
