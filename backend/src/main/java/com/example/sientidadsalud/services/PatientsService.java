package com.example.sientidadsalud.services;

import java.util.List;

import com.example.sientidadsalud.models.Patients;

public interface PatientsService {
	List<Patients>listar();
	Patients listarId(int id);
	Patients add(Patients p);
	Patients edit(Patients p);
	Patients delete(int id);
}
