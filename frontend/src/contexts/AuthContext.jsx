import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import ApiService from '@services/ApiService';

// Création du contexte
const AuthContext = createContext();

// Provider du contexte
export const AuthProvider = ({ children }) => {
    // États partagés pour l'authentification
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // true au démarrage pour vérifier l'auth
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    // Vérifier si l'utilisateur est connecté au démarrage
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const storedToken = ApiService.getToken();
                const storedRole = ApiService.getRole();

                if (storedToken && ApiService.isAuthenticated()) {
                    setToken(storedToken);
                    setRole(storedRole);
                    setIsAuthenticated(true);

                    // Récupérer les infos utilisateur depuis l'API
                    try {
                        const userResponse = await ApiService.getLoggedInUsesInfo();
                        if (userResponse.status === 200) {
                            setUser(userResponse.user);
                        }
                    } catch (error) {
                        // Si erreur lors de la récupération des infos utilisateur, déconnecter
                        console.error('Error fetching user info:', error);
                        logoutUser();
                    }
                }
            } catch (error) {
                console.error('Error checking auth status:', error);
                // En cas d'erreur, nettoyer l'authentification
                ApiService.clearAuth();
            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

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

    // Connexion réussie - stocker les données utilisateur
    const loginSuccess = useCallback((userData, userToken, userRole) => {
        setUser(userData);
        setToken(userToken);
        setRole(userRole);
        setIsAuthenticated(true);
        setError(null);

        // Sauvegarder avec chiffrement via ApiService
        ApiService.saveToken(userToken);
        ApiService.saveRole(userRole);

        showMessage('Connexion réussie');
    }, [showMessage]);

    // Déconnexion - nettoyer toutes les données
    const logoutUser = useCallback(() => {
        setUser(null);
        setToken(null);
        setRole(null);
        setIsAuthenticated(false);
        setError(null);

        // Utiliser la méthode de déconnexion d'ApiService
        ApiService.logout();

        showMessage('Déconnexion réussie');
    }, [showMessage]);

    // Mettre à jour les informations utilisateur
    const updateUser = useCallback((updatedUserData) => {
        setUser(updatedUserData);
    }, []);

    // Réinitialiser l'erreur
    const clearError = useCallback(() => {
        setError(null);
    }, []);

    // Réinitialiser le message
    const clearMessage = useCallback(() => {
        setMessage('');
    }, []);

    // Vérifier si l'utilisateur est admin
    const isAdmin = useCallback(() => {
        return ApiService.isAdmin();
    }, []);

    // Vérifier si l'utilisateur a un rôle spécifique
    const hasRole = useCallback((targetRole) => {
        return role === targetRole;
    }, [role]);

    // Récupérer les informations utilisateur actuelles
    const refreshUserInfo = useCallback(async () => {
        try {
            setLoading(true);
            const response = await ApiService.getLoggedInUsesInfo();
            if (response.status === 200) {
                setUser(response.user);
                return response.user;
            }
        } catch (error) {
            setErrorMessage(error);
            return null;
        } finally {
            setLoading(false);
        }
    }, [setErrorMessage]);

    // Valeur du contexte - uniquement l'état et les setters
    const contextValue = {
        // États
        user,
        token,
        role,
        isAuthenticated,
        loading,
        error,
        message,

        // Setters pour l'état
        setUser,
        setToken,
        setRole,
        setIsAuthenticated,
        setLoading,
        setError,

        // Fonctions utilitaires
        loginSuccess,
        logoutUser,
        updateUser,
        refreshUserInfo,
        showMessage,
        setErrorMessage,
        clearError,
        clearMessage,
        isAdmin,
        hasRole
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};

// Export du contexte pour une utilisation directe avec useContext
export { AuthContext };