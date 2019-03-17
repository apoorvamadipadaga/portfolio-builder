package com.apoorva.pb.repositories;

import com.apoorva.pb.models.Achievement;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AchievementRepository extends JpaRepository<Achievement, Integer> {

}