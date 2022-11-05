import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Items from './Items';
import Orders from './Orders';

const Home = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Items />} />
                <Route path="orders" element={<Orders />} />
            </Routes>
        </>
    );
};

export default Home;