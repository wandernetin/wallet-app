package com.wander.wallet.repository;

import com.wander.wallet.entity.Expense;
import com.wander.wallet.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    private ExpenseRepository expenseRepository;

    @Autowired
    public ExpenseServiceImpl (ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    @Override
    public Iterable<Expense> list() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense create(Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public Expense read(long id) {
        return expenseRepository.findOne(id);
    }

    @Override
    public Expense update(long id, Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public void delete(long id) {
        expenseRepository.delete(id);
    }
}
