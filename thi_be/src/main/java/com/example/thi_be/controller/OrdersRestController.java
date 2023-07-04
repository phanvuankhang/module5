package com.example.thi_be.controller;

import com.example.thi_be.model.Orders;
import com.example.thi_be.service.IOrdersService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("api/orders")
@CrossOrigin("*")
public class OrdersRestController {
    @Autowired
    private IOrdersService ordersService;

    @GetMapping("")
    public ResponseEntity<List<Orders>> getOrderList() {
        return new ResponseEntity<>(ordersService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteOrders(@PathVariable("id") Integer id) {
        ordersService.deleteById(id);
    }

    @PostMapping("")
    public void createOrder(@RequestBody Orders order) {
        ordersService.createOrder(order);
    }
}
