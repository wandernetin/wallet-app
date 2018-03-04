package com.wander.wallet.repository;

import com.wander.wallet.domain.Expense;
import org.springframework.data.repository.CrudRepository;

public interface ExpenseRepository  extends CrudRepository<Expense, Long> {
}
