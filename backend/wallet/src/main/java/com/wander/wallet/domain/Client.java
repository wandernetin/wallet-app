package com.wander.wallet.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table (name = "client04")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idClient;

    @Column
    private String nameClient;

    @Column
    private Double hourValue;

    @Column
    private Double hourTax;

    @Column
    private Double hourFee;

    @Column
    private TypeWork typeWork;

    @OneToMany(mappedBy = "client", fetch = FetchType.LAZY)
    private List<Job> jobsList;

    public int getIdClient() {
        return idClient;
    }

    public void setIdClient(int idClient) {
        this.idClient = idClient;
    }

    public String getNameClient() {
        return nameClient;
    }

    public void setNameClient(String nameClient) {
        this.nameClient = nameClient;
    }

    public Double getHourValue() {
        return hourValue;
    }

    public void setHourValue(Double hourValue) {
        this.hourValue = hourValue;
    }

    public Double getHourTax() {
        return hourTax;
    }

    public void setHourTax(Double hourTax) {
        this.hourTax = hourTax;
    }

    public Double getHourFee() {
        return hourFee;
    }

    public void setHourFee(Double hourFee) {
        this.hourFee = hourFee;
    }

    public TypeWork getTypeWork() {
        return typeWork;
    }

    public void setTypeWork(TypeWork typeWork) {
        this.typeWork = typeWork;
    }

    @JsonIgnore
    public List<Job> getJobsList() {
        return jobsList;
    }

    public void setJobsList(List<Job> jobsList) {
        this.jobsList = jobsList;
    }
}
