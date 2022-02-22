package com.example.sientidadsalud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sientidadsalud.models.Clinics;
import com.example.sientidadsalud.repositories.ClinicsRepository;

@Service
public class ClinicsServiceImp implements ClinicsService {
	@Autowired
	private ClinicsRepository repository;

	@Override
	public List<Clinics> listar() {
		return repository.findAll();
	}

	@Override
	public Clinics listarId(int id) {
		return repository.findById(id);
	}

	@Override
	public Clinics add(Clinics p) {
		return repository.save(p);
	}

	@Override
	public Clinics edit(Clinics p) {
		return repository.save(p);
	}

	@Override
	public Clinics delete(int id) {
		Clinics c = repository.findById(id);
		if (c != null) {
			repository.delete(c);
		}
		return c;
	}

}
