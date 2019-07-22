package com.wander.wallet.service.income;

import com.wander.wallet.domain.Income;
import com.wander.wallet.repository.IncomeRespository;
import com.wander.wallet.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class IncomeServiceImpl implements IncomeService {

    @Autowired
    private IncomeRespository incomeRespository;

    @Override
    public Iterable<Income> list() {
        return incomeRespository.findAll();
    }

    @Override
    public Income create(Income income) {
        return incomeRespository.save(income);
    }

    @Override
    public Income read(Long id) {
        return incomeRespository.findOne(id);
    }

    @Override
    public Income update(Long id, Income income) {
        return incomeRespository.save(income);
    }

    @Override
    public void delete(Long id) {
        incomeRespository.delete(id);
    }


    @Override
    public Double getIncomeTotalThisMonth() {
        Date firstDay = DateUtil.getFirstDayOfCurrentMonth();
        Date lastDay = DateUtil.getLastDayOfCurrentMonth();

        Double sum = 0.0;
        for (Income income : incomeRespository.findExpensesBetweenDates(firstDay, lastDay)){
            sum += income.getValue();
        }
        return sum;
    }
}
