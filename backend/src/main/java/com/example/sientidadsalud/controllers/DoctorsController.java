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

import com.example.sientidadsalud.models.Doctors;
import com.example.sientidadsalud.services.DoctorsService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/medicos")
public class DoctorsController {
	@Autowired
	DoctorsService service;
	
	@GetMapping
	public List<Doctors>listar() {
		return service.listar();
	}
	
	@GetMapping("/medico/{id}")
	public Doctors listarId(@PathVariable int id) {
		return service.listarId(id);
	}
	
	@PostMapping("/add")
	public Doctors add(@RequestBody Doctors d) {
		return service.add(d);
	}
	
	@PutMapping("/edit/{id}")
	public Doctors edit(@RequestBody Doctors d, @PathVariable int id) {
		d.setId(id);
		return service.edit(d);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}

}
