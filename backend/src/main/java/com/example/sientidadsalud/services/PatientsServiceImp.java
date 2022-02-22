package com.example.sientidadsalud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sientidadsalud.models.Patients;
import com.example.sientidadsalud.repositories.PatientsRepository;

@Service
public class PatientsServiceImp implements PatientsService {
	@Autowired
	private PatientsRepository repository;

	@Override
	public List<Patients> listar() {
		return repository.findAll();
	}

	@Override
	public Patients listarId(int id) {
		return repository.findById(id);
	}

	@Override
	public Patients add(Patients p) {
		String role = p.getUser().getRole().toString();
		if (role.equals("Paciente")) {
			repository.save(p);
		}
		return p;
	}

	@Override
	public Patients edit(Patients p) {
		return repository.save(p);
	}

	@Override
	public Patients delete(int id) {
		Patients p = repository.findById(id);
		if (p != null) {
			repository.delete(p);
		}
		return p;	
	}
	
}
