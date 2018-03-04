package com.wander.wallet.service;

public interface GenericService<T, X> {

    Iterable<T> list();

    T create(T t);

    T read(X id);

    T update(X id, T t);

    void delete(X id);
}
