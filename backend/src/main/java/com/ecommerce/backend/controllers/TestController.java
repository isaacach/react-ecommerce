package com.ecommerce.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.models.User;
import com.ecommerce.backend.repositories.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

  public UserRepository userRepository;

  @GetMapping("/all")
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }
  
}
