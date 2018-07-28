package com.wander.wallet.controller;

import com.wander.wallet.service.GenericService;
import org.springframework.web.bind.annotation.*;

public class GenericRestController<T, X> {

    protected GenericService<T, X> genericService;

    @CrossOrigin
    @RequestMapping( value = "/", method = RequestMethod.GET )
    public Iterable<T> list(){
        return genericService.list();
    }

    @CrossOrigin
    @RequestMapping( value = "/", method = RequestMethod.POST )
    public T create(@RequestBody T t){
        return genericService.create(t);

    }

    @CrossOrigin
    @RequestMapping( value = "/{id}", method = RequestMethod.GET )
    public T read(@PathVariable(value="id") X id){
        return genericService.read(id);
    }

    @CrossOrigin
    @RequestMapping( value = "/{id}", method = RequestMethod.PUT )
    public T update(@PathVariable(value="id") X id, @RequestBody T t){
        return genericService.update(id, t);
    }

    @CrossOrigin
    @RequestMapping( value = "/{id}", method = RequestMethod.DELETE )
    public void delete(@PathVariable(value="id") X id){
        genericService.delete(id);
    }
}
