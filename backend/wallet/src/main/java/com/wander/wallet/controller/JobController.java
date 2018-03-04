package com.wander.wallet.controller;

import com.wander.wallet.domain.Job;
import com.wander.wallet.service.job.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/job")
public class JobController extends GenericRestController<Job, Integer> {

    @Autowired
    public JobController(JobService jobService) {
        this.genericService = jobService;
    }
}
