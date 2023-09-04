package com.ecommerce.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.backend.models.User;
import com.ecommerce.backend.payload.request.EditRequest;
import com.ecommerce.backend.payload.response.MessageResponse;
import com.ecommerce.backend.repositories.UserRepository;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

  @Autowired
  UserRepository userRepository;

  @PostMapping("/edit")
  public ResponseEntity<?> registerUser(@Valid @RequestBody EditRequest editRequest) {

    User user = userRepository.findByEmail(editRequest.getEmail());

    if (user.getEmail() != editRequest.getEmail()) {
      if (userRepository.existsByEmail(editRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Email is already in use"));
    }
      user.setEmail(editRequest.getEmail());
    } else if (user.getUsername() != editRequest.getUsername()) {
      if (userRepository.existsByUsername(editRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken"));
    }
      user.setUsername(editRequest.getUsername());
    }

    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }

}