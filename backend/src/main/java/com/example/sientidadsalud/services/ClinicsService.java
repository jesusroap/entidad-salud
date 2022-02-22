package com.example.sientidadsalud.services;

import java.util.List;

import com.example.sientidadsalud.models.Clinics;

public interface ClinicsService {
	List<Clinics>listar();
	Clinics listarId(int id);
	Clinics add(Clinics p);
	Clinics edit(Clinics p);
	Clinics delete(int id);
}
