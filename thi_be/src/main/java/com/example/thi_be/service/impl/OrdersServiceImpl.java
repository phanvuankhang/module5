package com.example.thi_be.service.impl;

import com.example.thi_be.model.Orders;
import com.example.thi_be.repository.IOrdersRepository;
import com.example.thi_be.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersServiceImpl implements IOrdersService {
    @Autowired
    private IOrdersRepository ordersRepository;

    @Override
    public List<Orders> findAll() {
        return ordersRepository.findAllOrders();
    }

    @Override
    public void deleteById(Integer id) {
        ordersRepository.deletebyId(id);
    }

    @Override
    public Orders findById(Integer id) {
        return ordersRepository.findById(id).get();
    }

    @Override
    public Boolean createOrder(Orders orders) {
        ordersRepository.createOrder(orders.getQuantity(),orders.getTotalMoney(),orders.getProduct().getId());
        return true;
    }


}
