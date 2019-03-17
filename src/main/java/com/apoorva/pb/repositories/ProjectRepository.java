package com.apoorva.pb.repositories;

import com.apoorva.pb.models.Project;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

}