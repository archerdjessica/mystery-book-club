package com.mystery.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mystery.model.Admin;

@Repository
public interface AdminDAO extends JpaRepository<Admin, Integer> {

}
