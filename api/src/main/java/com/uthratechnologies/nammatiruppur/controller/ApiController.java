package com.uthratechnologies.nammatiruppur.controller;

import com.uthratechnologies.nammatiruppur.domain.Gender;
import com.uthratechnologies.nammatiruppur.service.IGenderService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping(path = "/status", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> status() {
        Map<String, String> status = new HashMap<>();
        status.put("status", "UP");
        return new ResponseEntity<Object>(status, HttpStatus.OK);
    }
}
