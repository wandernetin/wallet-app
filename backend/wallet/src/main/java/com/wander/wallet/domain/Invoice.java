package com.wander.wallet.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "invoice05")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idInvoice;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="clientId")
    private Client client;

    @Column
    private Date initialDate;

    @Column
    private Date endDate;

    public int getIdInvoice() {
        return idInvoice;
    }

    public void setIdInvoice(int idInvoice) {
        this.idInvoice = idInvoice;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Date getInitialDate() {
        return initialDate;
    }

    public void setInitialDate(Date initialDate) {
        this.initialDate = initialDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Invoice invoice = (Invoice) o;

        if (idInvoice != invoice.idInvoice) return false;
        if (client != null ? !client.equals(invoice.client) : invoice.client != null) return false;
        if (initialDate != null ? !initialDate.equals(invoice.initialDate) : invoice.initialDate != null) return false;
        return endDate != null ? endDate.equals(invoice.endDate) : invoice.endDate == null;
    }

    @Override
    public int hashCode() {
        int result = idInvoice;
        result = 31 * result + (client != null ? client.hashCode() : 0);
        result = 31 * result + (initialDate != null ? initialDate.hashCode() : 0);
        result = 31 * result + (endDate != null ? endDate.hashCode() : 0);
        return result;
    }
}
