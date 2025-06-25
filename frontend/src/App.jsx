import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "@pages/LoginPage";
import {AdminRoute, ProtectedRoute} from "./routes/ProtectedRoute.jsx";
import RegisterPage from "@pages/RegisterPage";
import CategoryPage from "@pages/CategoryPage";
import SupplierPage from "@pages/SupplierPage.jsx";
import AddEditSupplierPage from "@pages/AddEditSupplierPage.jsx";
import ProductPage from "@pages/ProductPage.jsx";
import AddEditProductPage from "@pages/AddEditProductPage.jsx";
import PurchasePage from "@pages/PurchasePage.jsx";
import TransactionsPage from "@pages/TransactionsPage.jsx";
import TransactionDetailsPage from "@pages/TransactionDetailsPage.jsx";
import ProfilePage from "@pages/ProfilePage.jsx";
import {AuthProvider} from "@/contexts/AuthContext.jsx";
import {ProductProvider} from "@/contexts/ProductContext.jsx";


function App() {
    return (
        <Router>
            <AuthProvider>
                <ProductProvider>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* ADMIN ROUTES */}
                <Route path="/category" element={<AdminRoute element={<CategoryPage />} />}/>
                <Route path="/supplier" element={<AdminRoute element={<SupplierPage/>}/>}/>
                <Route path="/add-supplier" element={<AdminRoute element={<AddEditSupplierPage/>}/>}/>
                <Route path="/edit-supplier/:supplierId" element={<AdminRoute element={<AddEditSupplierPage/>}/>}/>
                <Route path="/product" element={<AdminRoute element={<ProductPage/>}/>}/>


                <Route path="/add-product" element={<AdminRoute element={<AddEditProductPage/>}/>}/>
                <Route path="/edit-product/:productId" element={<AdminRoute element={<AddEditProductPage/>}/>}/>

                {/* ADMIN AND MANAGERS ROUTES */}
                <Route path="/purchase" element={<ProtectedRoute element={<PurchasePage/>}/>}/>
                {/*
                <Route path="/sell" element={<ProtectedRoute element={<SellPage/>}/>}/> */}
                <Route path="/transaction" element={<ProtectedRoute element={<TransactionsPage/>}/>}/>
                <Route path="/transaction/:transactionId" element={<ProtectedRoute element={<TransactionDetailsPage/>}/>}/>
                <Route path="/profile" element={<ProtectedRoute element={<ProfilePage/>}/>}/>
                {/*
                <Route path="/dashboard" element={<ProtectedRoute element={<DashboardPage/>}/>}/> */}



                <Route path="*" element={<LoginPage/>}/>

            </Routes>

                        </ProductProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
