package com.wander.wallet.repository;

import com.wander.wallet.domain.Income;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface IncomeRespository extends CrudRepository<Income, Long> {

    @Query("from Income e where e.date between :iniDate and :end")
    List<Income> findExpensesBetweenDates(@Param("iniDate") Date initial, @Param("end") Date end);

    @Query("from Income e order by id desc")
    List<Income> findLastIncome(Pageable pageable);

    default List<Income> findLastIncome() {
        return findLastIncome(new PageRequest(0,3));
    }
}
