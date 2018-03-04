package com.wander.wallet.domain;

public enum TypeWork {

    ABN (1, "ABN"),
    TFN(2, "TFN");

    private int id;

    private String description;

    TypeWork(int id, String description) {
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
