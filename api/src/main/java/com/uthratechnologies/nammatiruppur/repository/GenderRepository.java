package com.uthratechnologies.nammatiruppur.repository;

import com.uthratechnologies.nammatiruppur.domain.Gender;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenderRepository extends JpaRepository<Gender, Long> {

}
