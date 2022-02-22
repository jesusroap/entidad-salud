package com.example.sientidadsalud.repositories;

import java.util.List;
import org.springframework.data.repository.Repository;
import com.example.sientidadsalud.models.Doctors;

public interface DoctorsRepository extends Repository<Doctors, Integer>{
	List<Doctors>findAll();
	Doctors findById(int id);
	Doctors save(Doctors p);
	Doctors delete(Doctors p);
}
