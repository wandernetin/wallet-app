package com.wander.wallet.domain;

public enum PeriodicityEnum {

    WEEKLY (0, "Weekly"),
    FORTNIGHTLY (1, "Fortnightly"),
    MONTHLY (2, "Monthly"),
    ONCE (3, "Once");

    PeriodicityEnum(int id, String description) {
        this.id = id;
        this.description = description;
    }

    private int id;

    private String description;

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
