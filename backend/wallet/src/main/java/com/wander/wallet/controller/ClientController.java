package com.wander.wallet.controller;

import com.wander.wallet.domain.Client;
import com.wander.wallet.service.GenericService;
import com.wander.wallet.service.client.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/client")
public class ClientController extends GenericRestController<Client, Integer>{

    @Autowired
    public ClientController(ClientService clientService) {
        this.genericService = clientService;
    }
}
