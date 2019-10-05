package com.animal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.animal.dao.AnimalDAO;
import com.animal.model.Animal;
import com.animal.service.AnimalService;

@Service
public class AnimalServiceImpl implements AnimalService {

	@Autowired
	private AnimalDAO dao;

	@Override
	public Animal createAnimal(Animal animal) {
		return dao.save(animal);
	}

	@Override
	public Animal getAnimalById(int id) {
		return dao.findById(id).get();
	}

	@Override
	public List<Animal> getAllAnimals() {
		return dao.findAll();
	}

	@Override
	public Animal updateAnimal(Animal animal) {
		return dao.save(animal);
	}

	@Override
	public void deleteAnimal(int id) {
		dao.deleteById(id);
	}

	@Override
	public List<Animal> getAnimalByName(String name) {
		return dao.findByName(name);
	}

}
