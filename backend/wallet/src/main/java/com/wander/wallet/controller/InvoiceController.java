package com.wander.wallet.controller;

import com.wander.wallet.service.invoice.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

@RestController
@RequestMapping("/invoice")
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @RequestMapping( value = "/create", method = RequestMethod.GET )
    public void createInvoice() throws ParseException {

        invoiceService.createInvoice(null, null, null);
    }
}
