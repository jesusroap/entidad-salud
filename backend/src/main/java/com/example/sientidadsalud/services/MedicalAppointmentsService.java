package com.example.sientidadsalud.services;

import java.util.List;

import com.example.sientidadsalud.models.MedicalAppointments;

public interface MedicalAppointmentsService {
	List<MedicalAppointments>listar();
	MedicalAppointments listarId(int id);
	MedicalAppointments add(MedicalAppointments p);
	MedicalAppointments edit(MedicalAppointments p);
	MedicalAppointments delete(int id);

}
