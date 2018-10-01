package com.wander.wallet.controller;

import com.wander.wallet.domain.Expense;
import com.wander.wallet.service.GenericService;
import com.wander.wallet.service.expense.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.text.ParseException;


@RestController
@RequestMapping("/expense")
public class ExpenseController extends GenericRestController<Expense, Long>{

    @Autowired
    private ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
        genericService = expenseService;
    }

    @RequestMapping( value = "/summary", method = RequestMethod.GET )
    public String getExpensesFromThisWeek() throws ParseException {
        return expenseService.getTotalFromExpensesRecurrentForThisWeek();
    }
}
