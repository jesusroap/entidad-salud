package com.example.sientidadsalud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sientidadsalud.models.Doctors;
import com.example.sientidadsalud.repositories.DoctorsRepository;

@Service
public class DoctorsServiceImp implements DoctorsService {
	@Autowired
	private DoctorsRepository repository;

	@Override
	public List<Doctors> listar() {
		return repository.findAll();
	}

	@Override
	public Doctors listarId(int id) {
		return repository.findById(id);
	}

	@Override
	public Doctors add(Doctors d) {
		String role = d.getUser().getRole().toString();
		if (role.equals("Medico")) {
			repository.save(d);
		}
		return d;
	}

	@Override
	public Doctors edit(Doctors p) {
		return repository.save(p);
	}

	@Override
	public Doctors delete(int id) {
		Doctors d = repository.findById(id);
		if (d != null) {
			repository.delete(d);
		}
		return d;
	}
	

}
