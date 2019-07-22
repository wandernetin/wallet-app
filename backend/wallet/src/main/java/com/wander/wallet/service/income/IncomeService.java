package com.wander.wallet.service.income;

import com.wander.wallet.domain.Income;
import com.wander.wallet.service.GenericService;

public interface IncomeService extends GenericService<Income, Long> {

    public Double getIncomeTotalThisMonth();

}
