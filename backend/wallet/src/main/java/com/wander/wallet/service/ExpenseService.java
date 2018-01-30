package com.wander.wallet.service;

import com.wander.wallet.entity.Expense;

public interface ExpenseService {

    Iterable<Expense> list();

    Expense create(Expense expense);

    Expense read(long id);

    Expense update(long id, Expense expense);

    void delete(long id);
}
