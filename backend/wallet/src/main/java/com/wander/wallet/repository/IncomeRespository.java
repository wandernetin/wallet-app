package com.wander.wallet.repository;

import com.wander.wallet.domain.Income;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface IncomeRespository extends CrudRepository<Income, Long> {

    @Query("from Income e where e.date between :iniDate and :end")
    public List<Income> findExpensesBetweenDates(@Param("iniDate") Date initial, @Param("end") Date end);
}
