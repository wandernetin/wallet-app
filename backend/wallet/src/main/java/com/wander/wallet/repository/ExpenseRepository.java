package com.wander.wallet.repository;

        import com.wander.wallet.domain.Expense;
        import org.springframework.data.domain.PageRequest;
        import org.springframework.data.domain.Pageable;
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

    @Query("from Expense e order by id desc")
    List<Expense> findLastExpense(Pageable pageable);

    default List<Expense> findLastExpense() {
        return findLastExpense(new PageRequest(0,3));
    }
}
