package com.wander.wallet.controller;

import com.wander.wallet.service.GenericService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@CrossOrigin
public class GenericRestController<T, X> {

    protected GenericService<T, X> genericService;

    @CrossOrigin
    @RequestMapping( value = "/", method = RequestMethod.GET )
    public Iterable<T> list(){
        return genericService.list();
    }

    @CrossOrigin
    @RequestMapping( value = "/", method = RequestMethod.POST )
    public ResponseEntity<?> create(@Valid @RequestBody T t, BindingResult result){
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for(FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        t = genericService.create(t);
        return new ResponseEntity<T>(t, HttpStatus.CREATED);

    }

    @CrossOrigin
    @RequestMapping( value = "/{id}", method = RequestMethod.GET )
    public ResponseEntity<?> read(@PathVariable(value="id") X id) {
        T t = genericService.read(id);
        if (t == null) {
            return new ResponseEntity<String>("Not found id: " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<T>(t, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping( value = "/{id}", method = RequestMethod.PUT )
    public ResponseEntity<?> update(@PathVariable(value="id") X id, @RequestBody T t){
        t = genericService.update(id, t);
        return new ResponseEntity<T>(t, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping( value = "/{id}", method = RequestMethod.DELETE )
    public ResponseEntity<?> delete(@PathVariable(value="id") X id){
        genericService.delete(id);
        return new ResponseEntity<String>("Deleted", HttpStatus.OK);
    }
}
