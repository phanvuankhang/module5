package com.example.thi_be.service;

import com.example.thi_be.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrdersService {
    List<Orders> findAll();
    void deleteById(Integer id);
    Orders findById(Integer id);
    Boolean createOrder(Orders orders);
}
