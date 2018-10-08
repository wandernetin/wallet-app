package com.wander.wallet.controller;

import com.wander.wallet.domain.Job;
import com.wander.wallet.service.job.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/job")
public class JobController extends GenericRestController<Job, Integer> {

    @Autowired
    private JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
        genericService = jobService;
    }

    @RequestMapping( value = "/summary", method = RequestMethod.GET )
    public Double getJobsFromThisWeek() throws ParseException {
        return jobService.findJobsFromThisWeek();
    }
}
