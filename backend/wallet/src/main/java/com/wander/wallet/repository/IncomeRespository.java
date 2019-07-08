package com.wander.wallet.repository;

import com.wander.wallet.domain.Income;
import org.springframework.data.repository.CrudRepository;

public interface IncomeRespository extends CrudRepository<Income, Long> {
}
