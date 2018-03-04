package com.wander.wallet.service.job;

import com.wander.wallet.domain.Job;
import com.wander.wallet.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
