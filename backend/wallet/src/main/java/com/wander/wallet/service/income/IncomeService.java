package com.wander.wallet.service.income;

import com.wander.wallet.domain.Income;
import com.wander.wallet.service.GenericService;

import java.util.List;

public interface IncomeService extends GenericService<Income, Long> {

    public Double getIncomeTotalThisMonth();

    public List<Income> getLastIncomes();

}
