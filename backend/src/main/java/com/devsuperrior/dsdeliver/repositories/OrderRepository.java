package com.devsuperrior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperrior.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
