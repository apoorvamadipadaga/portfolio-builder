package com.apoorva.pb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

import com.apoorva.pb.models.Portfolio;
import com.apoorva.pb.repositories.PortfolioRepository;

@CrossOrigin
@RestController
public class PortfolioController {
	@Autowired
    private PortfolioRepository portfolioRepository;

	@GetMapping("/api/portfolios")
	public @ResponseBody Iterable<Portfolio> getAllPortfolios() {
		return portfolioRepository.findAll();
    }

    @GetMapping("/api/portfolios/{uname}")
    public @ResponseBody Optional<Portfolio> getPortfolio(@PathVariable String uname) {
        Optional<Portfolio> portfolio = portfolioRepository.findByUname(uname); 
        return portfolio;
    }
    
    @PostMapping("/api/portfolios")
    public @ResponseBody Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        portfolioRepository.save(portfolio);
        return portfolio;
    }
}