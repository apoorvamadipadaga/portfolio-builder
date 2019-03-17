package com.apoorva.pb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apoorva.pb.models.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Integer> {

}