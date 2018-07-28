package com.wander.wallet.service.invoice;

import com.wander.wallet.domain.Client;
import com.wander.wallet.domain.Job;
import com.wander.wallet.repository.ClientRepository;
import com.wander.wallet.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    private JobRepository jobRepository;

    private ClientRepository clientRepository;

    @Autowired
    public InvoiceServiceImpl(JobRepository jobRepository, ClientRepository clientRepository) {
        this.jobRepository = jobRepository;
        this.clientRepository = clientRepository;
    }

    @Override
    public List<Job> createInvoice(Client client, Date initalDate, Date endDate) throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        Client test = clientRepository.findOne(2);
        initalDate = sdf.parse("01/01/2018");
        endDate = sdf.parse("02/05/2018");

        List<Job> jobs = jobRepository.findByClientBetweenDates(test, initalDate, endDate);

        return new ArrayList<Job>();
    }
}
