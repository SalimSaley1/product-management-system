/*
import React, { useState, useEffect } from "react";
import MainLayout from "@components/layouts/MainLayout/MainLayout.jsx";
import ApiService from "@services/ApiService";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "@components/common/PaginationComponent/PaginationComponent.jsx";

 */

import React, { useState, useEffect } from "react";
import MainLayout from "@components/layouts/MainLayout/MainLayout.jsx";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "@components/common/PaginationComponent/PaginationComponent.jsx";
import ApiService from "@services/ApiService";
import {useProductContext} from "@/contexts/ProductContext.jsx";

const ProductPage = () => {
    const {
        products,
        loading,
        error,
        message,
        setProducts,
        setLoading,
        setErrorMessage,
        showMessage
    } = useProductContext();

    const navigate = useNavigate();

    // Pagination Set-Up
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const itemsPerPage = 10;

    // Charger les produits au montage du composant
    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const productData = await ApiService.getAllProducts();

                if (productData.status === 200) {
                    setProducts(productData.products);
                }
            } catch (error) {
                setErrorMessage(error);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, [setProducts, setLoading, setErrorMessage]);

    // Gérer la pagination quand les produits ou la page changent
    useEffect(() => {
        if (products.length > 0) {
            setTotalPages(Math.ceil(products.length / itemsPerPage));

            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = currentPage * itemsPerPage;

            setPaginatedProducts(products.slice(startIndex, endIndex));
        }
    }, [products, currentPage, itemsPerPage]);

    // Supprimer un produit
    const handleDeleteProduct = async (productId) => {
        if (window.confirm("Are you sure you want to delete this Product?")) {
            try {
                setLoading(true);
                await ApiService.deleteProduct(productId);

                // Mettre à jour l'état local en supprimant le produit
                setProducts(products.filter(product => product.id !== productId));
                showMessage("Product successfully Deleted");
            } catch (error) {
                setErrorMessage(error);
            } finally {
                setLoading(false);
            }
        }
    };

    // Affichage de loading
    if (loading) {
        return (
            <MainLayout>
                <div className="loading">Loading products...</div>
            </MainLayout>
        );
    }

    // Affichage d'erreur
    if (error) {
        return (
            <MainLayout>
                <div className="error">Error: {error}</div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            {message && <div className="message">{message}</div>}

            <div className="product-page">
                <div className="product-header">
                    <h1>Products</h1>
                    <button
                        className="add-product-btn"
                        onClick={() => navigate("/add-product")}
                    >
                        Add Product
                    </button>
                </div>

                {paginatedProducts.length > 0 ? (
                    <div className="product-list">
                        {paginatedProducts.map((product) => (
                            <div key={product.id} className="product-item">
                                <img
                                    className="product-image"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />

                                <div className="product-info">
                                    <h3 className="name">{product.name}</h3>
                                    <p className="sku">Sku: {product.sku}</p>
                                    <p className="price">Price: {product.price}</p>
                                    <p className="quantity">Quantity: {product.stockQuantity}</p>
                                </div>

                                <div className="product-actions">
                                    <button
                                        className="edit-btn"
                                        onClick={() => navigate(`/edit-product/${product.id}`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDeleteProduct(product.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-products">No products found.</div>
                )}
            </div>

            {totalPages > 1 && (
                <PaginationComponent
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </MainLayout>
    );
};

export default ProductPage;