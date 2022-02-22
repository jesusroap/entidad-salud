package com.example.sientidadsalud.services;

import java.util.List;

import com.example.sientidadsalud.models.Doctors;

public interface DoctorsService {
	List<Doctors>listar();
	Doctors listarId(int id);
	Doctors add(Doctors p);
	Doctors edit(Doctors p);
	Doctors delete(int id);
}
