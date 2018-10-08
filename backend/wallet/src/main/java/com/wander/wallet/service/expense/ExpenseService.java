package com.wander.wallet.service.expense;

import com.wander.wallet.domain.Expense;
import com.wander.wallet.service.GenericService;

import java.util.Date;

public interface ExpenseService extends GenericService <Expense, Long> {

    Double totalValueForThisWeek();

    Double getTotalFromExpensesRecurrentForThisWeek();

}
