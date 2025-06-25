import React, { createContext, useContext, useState, useCallback } from 'react';

// Création du contexte
const ProductContext = createContext();

// Provider du contexte
export const ProductProvider = ({ children }) => {
    // États partagés
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    // Fonction pour afficher un message temporaire
    const showMessage = useCallback((msg, duration = 4000) => {
        setMessage(msg);
        setTimeout(() => {
            setMessage('');
        }, duration);
    }, []);

    // Fonction pour gérer les erreurs
    const setErrorMessage = useCallback((error) => {
        const errorMsg = error.response?.data?.message || error.message || 'Une erreur est survenue';
        setError(errorMsg);
        showMessage(errorMsg);
    }, [showMessage]);

    // Réinitialiser l'erreur
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    // Réinitialiser le produit courant
    const clearCurrentProduct = useCallback(() => {
        setCurrentProduct(null);
    }, []);

    // Réinitialiser les résultats de recherche
    const clearSearchResults = useCallback(() => {
        setSearchResults([]);
    }, []);

    // Valeur du contexte - uniquement l'état et les setters
    const contextValue = {
        // États
        products,
        currentProduct,
        searchResults,
        loading,
        error,
        message,

        // Setters pour l'état
        setProducts,
        setCurrentProduct,
        setSearchResults,
        setLoading,
        setError,

        // Fonctions utilitaires
        showMessage,
        setErrorMessage,
        clearError,
        clearCurrentProduct,
        clearSearchResults
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};

// Export du contexte pour une utilisation directe avec useContext
export { ProductContext };