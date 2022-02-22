package com.example.sientidadsalud.repositories;

import java.util.List;
import org.springframework.data.repository.Repository;
import com.example.sientidadsalud.models.MedicalAppointments;

public interface MedicalAppointmentsRepository extends Repository<MedicalAppointments, Integer> {
	List<MedicalAppointments>findAll();
	MedicalAppointments findById(int id);
	MedicalAppointments save(MedicalAppointments m);
	MedicalAppointments delete(MedicalAppointments m);
}
