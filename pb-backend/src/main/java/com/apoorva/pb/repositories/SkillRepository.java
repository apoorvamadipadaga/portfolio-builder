package com.apoorva.pb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apoorva.pb.models.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {

}