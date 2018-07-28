package com.wander.wallet.service.invoice;

import com.wander.wallet.domain.Client;
import com.wander.wallet.domain.Job;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface InvoiceService {

    public List<Job> createInvoice(Client client, Date initalDate, Date endDate) throws ParseException;
}
