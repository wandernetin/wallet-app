package com.wander.wallet.controller;

import com.wander.wallet.domain.Expense;
import com.wander.wallet.service.expense.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/expense")
public class ExpenseController extends GenericRestController<Expense, Long>{

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.genericService = expenseService;
    }
}
