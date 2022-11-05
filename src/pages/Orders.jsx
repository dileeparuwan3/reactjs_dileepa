import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsTotal, toggleCheckout } from '../store/slices/checkoutSlice';
import { clearCart } from '../store/slices/cartSlice';
import { addOrders } from '../store/slices/ordersSLice';
import Select from 'react-select'
import usersData from '../data/usersData'
import { useState } from 'react';

const Orders = () => {
    const { orders } = useSelector((state) => state.orders);

    useEffect(() => {
      console.log(orders);
    }, [])
    

    return (
        <>
            <section id="page">
                <div className="container">
                    <div className="page_content">
                        <div className="content_container">
                            <h3>Orders</h3>
                            <br />
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Customer</th>
                                        <th>Items</th>
                                        <th>Payment Method</th>
                                        <th>Items Total (LKR)</th>
                                        <th>Discount (LKR)</th>
                                        <th>Total (LKR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{order.customer}</td>
                                                    <td>{
                                                        order.items.map((item, i) => {
                                                            return (
                                                                <div className="order_items">
                                                                    <figure className="order_item_img">
                                                                        <img src={item.img} alt="product-img" />
                                                                    </figure>
                                                                    <div className="order_item_info">
                                                                        <b>{item.title}</b>
                                                                        <br />
                                                                        &times; <b>{item.quantity}</b>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }</td>
                                                    <td>{order.paymentMethod}</td>
                                                    <td className="text-right">{order.itemsTotal}</td>
                                                    <td className="text-right">{order.discount}</td>
                                                    <td className="text-right">{order.totalPayable}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Orders;