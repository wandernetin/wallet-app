package com.wander.wallet.repository;

import com.wander.wallet.domain.Client;
import com.wander.wallet.domain.Job;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface JobRepository extends CrudRepository<Job, Integer>{

    @Query("from Job j where j.client = :client and j.date between :iniDate and :end")
    public List<Job> findByClientBetweenDates(@Param("client") Client client, @Param("iniDate") Date initial, @Param("end") Date end);

    @Query("from Job j where j.date between :iniDate and :end")
    public List<Job> findJobsByDates(@Param("iniDate") Date start, @Param("end") Date finish);

}
