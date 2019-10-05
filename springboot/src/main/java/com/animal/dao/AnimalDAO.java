package com.animal.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.animal.model.Animal;

@Repository
public interface AnimalDAO extends JpaRepository<Animal, Integer>{

	@Query("select a from Animal a where a.name = :name")
	List<Animal> findByName(String name);
	
}
