package com.ecommerce.backend.payload.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@RequiredArgsConstructor
public class MessageResponse {

  private String message;
  
  public MessageResponse(String message) {
    this.message = message;
  }
}
