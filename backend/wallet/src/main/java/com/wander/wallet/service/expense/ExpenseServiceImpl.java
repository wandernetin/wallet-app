package com.wander.wallet.service.expense;

import com.wander.wallet.domain.Expense;
import com.wander.wallet.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;


    @Override
    public Iterable<Expense> list() {
        return expenseRepository.findAll();
    }

    @Override
    public Expense create(Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public Expense read(Long id) {
        return expenseRepository.findOne(id);
    }

    @Override
    public Expense update(Long id, Expense expense) {
        return expenseRepository.save(expense);
    }

    @Override
    public void delete(Long id) {
        expenseRepository.delete(id);
    }
}
