package com.wander.wallet.domain;

public enum CategoryEnum {

    RENT (0, "Rent"),
    TRANSPORT (1, "Transport"),
    EATING_OUT(2, "Eating Out"),
    SHOPPING(3, "Shopping"),
    ELETRICITY(4, "Eletricity Bill"),
    PHONE(5, "Phone Bill"),
    INTERNET(6, "Internet Bill"),
    EDUCATION(7, "Education"),
    TRAVEL(8, "Travel"),
    JOBS(9, "Jobs"),
    CAR(10, "Car");

    private int id;

    private String description;


    CategoryEnum(int id, String description) {
        this.id = id;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
