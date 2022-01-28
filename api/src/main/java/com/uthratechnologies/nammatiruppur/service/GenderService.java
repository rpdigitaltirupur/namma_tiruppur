package com.uthratechnologies.nammatiruppur.service;

import com.uthratechnologies.nammatiruppur.domain.Gender;
import com.uthratechnologies.nammatiruppur.repository.GenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenderService implements IGenderService {

    private GenderRepository genderRepository;

    @Autowired
    public GenderService(GenderRepository genderRepository) {
        this.genderRepository = genderRepository;
    }

    @Override
    public List<Gender> getAll() {
        return genderRepository.findAll();
    }
}
