package com.example.thi_be.repository;

import com.example.thi_be.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IOrdersRepository extends JpaRepository<Orders,Integer> {
    @Query(value = "update orders o set o.is_delete = true where o.id=:id", nativeQuery = true)
    @Modifying
    @Transactional
    void deletebyId(@Param("id") Integer id);
    @Query(value = "select o from Orders o where o.isDelete = false")
    List<Orders> findAllOrders();

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO orders(`quantity`,price,product_id) VALUES(:quantity,:price,:product_id)", nativeQuery = true)
    void createOrder(@Param("quantity") Integer quantity,
                     @Param("price") Integer price, @Param("product_id") Integer product_id);
}
