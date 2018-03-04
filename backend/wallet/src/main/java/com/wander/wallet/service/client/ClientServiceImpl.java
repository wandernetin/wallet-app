package com.wander.wallet.service.client;

import com.wander.wallet.domain.Client;
import com.wander.wallet.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Iterable<Client> list() {
        return clientRepository.findAll();
    }

    @Override
    public Client create(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client read(Integer id) {
        return clientRepository.findOne(id);
    }

    @Override
    public Client update(Integer id, Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void delete(Integer id) {
        clientRepository.delete(id);
    }
}
