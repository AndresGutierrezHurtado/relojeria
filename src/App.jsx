import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Views
import ProductList from "./views/productList.jsx";
import AppLayout from "./layouts/appLayout.jsx";
import Home from "./views/home.jsx";
import Brands from "./views/brands.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/collections" element={<Brands />} />
                    <Route path="/collections/:collection" element={<ProductList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
