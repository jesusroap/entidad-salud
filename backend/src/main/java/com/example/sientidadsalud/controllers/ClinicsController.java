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

import com.example.sientidadsalud.models.Clinics;
import com.example.sientidadsalud.services.ClinicsService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/consultorios")
public class ClinicsController {
	@Autowired
	ClinicsService service;
	
	@GetMapping
	public List<Clinics>listar() {
		return service.listar();
	}
	
	@GetMapping("/consultorio/{id}")
	public Clinics listarId(@PathVariable int id) {
		return service.listarId(id);
	}
	
	@PostMapping("/add")
	public Clinics add(@RequestBody Clinics p) {
		return service.add(p);
	}
	
	@PutMapping("/edit/{id}")
	public Clinics edit(@RequestBody Clinics p, @PathVariable int id) {
		p.setId(id);
		return service.edit(p);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}

}
