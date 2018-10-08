package com.wander.wallet.service.expense;

import com.wander.wallet.domain.Expense;
import com.wander.wallet.domain.PeriodicityEnum;
import com.wander.wallet.repository.ExpenseRepository;
import com.wander.wallet.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.List;

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

    @Override
    public Double totalValueForThisWeek() {
        Date firstDate = DateUtil.getFirstDayOfThisWeek();
        Date lastDate = DateUtil.getLastDayOfThisWeek();

        Double sum = 0.0;
        for (Expense expense : expenseRepository.findExpensesBetweenDates(firstDate, lastDate)){
            sum += expense.getValue();
        }
        return sum;
    }

    @Override
    public Double getTotalFromExpensesRecurrentForThisWeek() {
        Double sum = 0.0;
        for (Expense ex : expenseRepository.findExpensesRecurrent()){
            if(ex.getPeriodicity().equals(PeriodicityEnum.WEEKLY)) {
                sum += ex.getValue();
            } else if (ex.getPeriodicity().equals(PeriodicityEnum.FORTNIGHTLY)) {
                sum += (ex.getValue()/2);
            } else if (ex.getPeriodicity().equals(PeriodicityEnum.MONTHLY)) {
                sum += ((ex.getValue()/30)*7);
            }
        }
        DecimalFormat decimalFormat = new DecimalFormat("#,##0.00");
        return sum;
    }
}
