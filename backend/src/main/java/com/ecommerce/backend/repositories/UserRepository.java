package com.ecommerce.backend.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.backend.models.User;

public interface UserRepository extends JpaRepository<User, Long>{

  Optional<User> findByUsername(String username);

  User findByEmail(String email);

  Optional<User> findById(Long id);

  User getById(Long id);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String username);

  List<User> findAll();

}
