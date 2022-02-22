package com.example.sientidadsalud.repositories;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.example.sientidadsalud.models.Clinics;

public interface ClinicsRepository extends Repository<Clinics, Integer> {
	List<Clinics>findAll();
	Clinics findById(int id);
	Clinics save(Clinics p);
	Clinics delete(Clinics p);

}
