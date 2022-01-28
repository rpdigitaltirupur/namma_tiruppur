package com.uthratechnologies.nammatiruppur.domain;

import javax.persistence.*;

@Entity
@Table(name = "nt_gender", schema = "admin")
public class Gender {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "gender_nme")
    private String genderNme;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGenderNme() {
        return genderNme;
    }

    public void setGenderNme(String genderNme) {
        this.genderNme = genderNme;
    }

    @Override
    public String toString() {
        return "Gender{" +
                "id=" + id +
                ", genderNme='" + genderNme + '\'' +
                '}';
    }
}
