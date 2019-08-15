package com.wander.wallet.service.expense;

import com.wander.wallet.domain.Expense;
import com.wander.wallet.service.GenericService;

import java.util.Date;
import java.util.List;

public interface ExpenseService extends GenericService <Expense, Long> {

    Double totalValueForThisWeek();

    Double getTotalFromExpensesRecurrentForThisWeek();

    Double getTotalFromThisMonth();

    List<Expense> getLastExpenses();

}
