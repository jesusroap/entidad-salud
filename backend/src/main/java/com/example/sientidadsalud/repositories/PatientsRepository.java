package com.example.sientidadsalud.repositories;

import java.util.List;
import org.springframework.data.repository.Repository;
import com.example.sientidadsalud.models.Patients;

public interface PatientsRepository extends Repository<Patients, Integer> {
	List<Patients>findAll();
	Patients findById(int id);
	Patients save(Patients p);
	Patients delete(Patients p);
}
