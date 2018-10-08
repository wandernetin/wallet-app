package com.wander.wallet.service.job;

import com.wander.wallet.domain.Job;
import com.wander.wallet.repository.JobRepository;
import com.wander.wallet.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.util.Date;
import java.util.List;

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;

    @Override
    public Iterable<Job> list() {
        return jobRepository.findAll();
    }

    @Override
    public Job create(Job job) {
        return jobRepository.save(job);
    }

    @Override
    public Job read(Integer id) {
        return jobRepository.findOne(id);
    }

    @Override
    public Job update(Integer id, Job job) {
        return jobRepository.save(job);
    }

    @Override
    public void delete(Integer id) {
        jobRepository.delete(id);
    }

    @Override
    public Double findJobsFromThisWeek() {

        Date firstDate = DateUtil.getFirstDayOfThisWeek();
        Date lastDate = DateUtil.getLastDayOfThisWeek();

        Double total = 0.0;
        for(Job job : jobRepository.findJobsByDates(firstDate, lastDate)){
            total += job.getTotalJob();
        }
        return total;
    }
}
