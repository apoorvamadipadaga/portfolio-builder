package com.apoorva.pb.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

import com.apoorva.pb.models.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Integer> {

    Optional<Portfolio> findByUname(String uname);

    Optional<Portfolio> findByUnameAndPin(String uname, int pin);

}