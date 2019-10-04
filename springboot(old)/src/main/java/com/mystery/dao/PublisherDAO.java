package com.mystery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mystery.model.Publisher;

@Repository
public interface PublisherDAO extends JpaRepository<Publisher, Integer> {

}
