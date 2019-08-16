package com.wander.wallet.controller;

import com.wander.wallet.domain.Income;
import com.wander.wallet.service.income.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/income")
public class IncomeController extends GenericRestController<Income, Long> {

    private IncomeService incomeService;

    @Autowired
    public IncomeController(IncomeService incomeService) {
        this.incomeService = incomeService;
        genericService = incomeService;
    }

    @RequestMapping(value="/summaryMonth", method = RequestMethod.GET)
    public Double getCurrentMonthIncomeTotal() {
        return incomeService.getIncomeTotalThisMonth();
    }

    @RequestMapping(value="/lastIncomes", method = RequestMethod.GET)
    public List<Income> getLastIncome() {
        return incomeService.getLastIncomes();
    }
}
