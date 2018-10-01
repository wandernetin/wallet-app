package com.wander.wallet.repository;

        import com.wander.wallet.domain.Client;
        import com.wander.wallet.domain.Expense;
        import com.wander.wallet.domain.Job;
        import org.springframework.data.jpa.repository.Query;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.data.repository.query.Param;

        import java.util.Date;
        import java.util.List;

public interface ExpenseRepository  extends CrudRepository<Expense, Long> {

    @Query("from Expense e where e.date between :iniDate and :end")
    List<Expense> findExpensesBetweenDates(@Param("iniDate") Date initial, @Param("end") Date end);


    @Query("from Expense e where e.active is true")
    List<Expense> findExpensesRecurrent();
}
