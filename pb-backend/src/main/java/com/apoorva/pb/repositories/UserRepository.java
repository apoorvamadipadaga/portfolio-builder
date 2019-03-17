package com.apoorva.pb.repositories;

import org.springframework.data.repository.CrudRepository;

import com.apoorva.pb.models.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}