package com.wander.wallet.controller;

import com.wander.wallet.entity.Expense;
import com.wander.wallet.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {

    private ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @RequestMapping( value = "/", method = RequestMethod.GET )
    public Iterable<Expense> list(){
        return expenseService.list();
    }

    @RequestMapping( value = "/", method = RequestMethod.POST )
    public Expense create(@RequestBody Expense expense){
        return expenseService.create(expense);
    }

    @RequestMapping( value = "/{id}", method = RequestMethod.GET )
    public Expense read(@PathVariable(value="id") long id){
        return expenseService.read(id);
    }

    @RequestMapping( value = "/{id}", method = RequestMethod.PUT )
    public Expense update(@PathVariable(value="id") long id, @RequestBody Expense expense){
        return expenseService.update(id,expense);
    }

    @RequestMapping( value = "/{id}", method = RequestMethod.DELETE )
    public void delete(@PathVariable(value="id") int id){
        expenseService.delete(id);
    }
}
