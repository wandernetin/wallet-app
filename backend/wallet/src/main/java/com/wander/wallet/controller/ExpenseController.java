package com.wander.wallet.controller;

import com.wander.wallet.domain.Expense;
import com.wander.wallet.service.expense.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;


@RestController
@RequestMapping("/expense")
public class ExpenseController extends GenericRestController<Expense, Long>{

    private ExpenseService expenseService;

    @Autowired
    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
        genericService = expenseService;
    }

    @RequestMapping( value = "/summary", method = RequestMethod.GET )
    public Double getExpensesFromThisWeek() throws ParseException {
        return expenseService.getTotalFromExpensesRecurrentForThisWeek();
    }

    @RequestMapping(value="/summaryMonth", method = RequestMethod.GET)
    public Double getCurrentMonthExpensesTotal() {
        return expenseService.getTotalFromThisMonth();
    }

    @RequestMapping(value="/last3expenses", method = RequestMethod.GET)
    public List<Expense> getLastExpenses() {
        return expenseService.getLastExpenses();
    }
}
