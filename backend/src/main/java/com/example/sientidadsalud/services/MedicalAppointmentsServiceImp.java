package com.example.sientidadsalud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sientidadsalud.models.MedicalAppointments;
import com.example.sientidadsalud.repositories.MedicalAppointmentsRepository;

@Service
public class MedicalAppointmentsServiceImp implements MedicalAppointmentsService {
	@Autowired
	private MedicalAppointmentsRepository repository;

	@Override
	public List<MedicalAppointments> listar() {
		return repository.findAll();
	}

	@Override
	public MedicalAppointments listarId(int id) {
		return repository.findById(id);
	}

	@Override
	public MedicalAppointments add(MedicalAppointments m) {
		return repository.save(m);
	}

	@Override
	public MedicalAppointments edit(MedicalAppointments m) {
		return repository.save(m);
	}

	@Override
	public MedicalAppointments delete(int id) {
		MedicalAppointments m = repository.findById(id);
		if (m != null) {
			repository.delete(m);
		}
		return m;
	}

}
