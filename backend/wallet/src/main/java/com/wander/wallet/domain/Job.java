package com.wander.wallet.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table (name = "job02")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idJob;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="clientId")
    private Client client;

    @Column
    private Date date;

    @Column
    private Double qtHour;

    public int getIdJob() {
        return idJob;
    }

    public void setIdJob(int idJob) {
        this.idJob = idJob;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getQtHour() {
        return qtHour;
    }

    public void setQtHour(Double qtHour) {
        this.qtHour = qtHour;
    }

    public Double getTotalJob () {
        if (getClient() == null || getQtHour() == 0) {
            return 0.0;
        } else {
            return getClient().getHourValue() * getQtHour();
        }
    }
}
