import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Views
import ProductList from "./views/ProductList";
import AppLayout from "./layouts/appLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<div>inicio</div>} />
                    <Route path="/list" element={<ProductList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
