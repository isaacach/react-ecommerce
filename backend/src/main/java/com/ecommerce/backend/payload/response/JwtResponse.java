package com.ecommerce.backend.payload.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class JwtResponse {
  
  private String token;
  private String type = "Bearer";
  private Long id;
  private String username;
  private String email;

  public JwtResponse(String accessToken, Long id, String username, String email) {
    this.token = accessToken;
    this.id = id;
    this.username = username;
    this.email = email;
  }
  
}
