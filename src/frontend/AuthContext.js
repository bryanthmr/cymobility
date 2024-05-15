import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        loggedIn: false,
        user: null,
    });

    const checkSession = async () => {
        try {
            const response = await fetch('https://cymobility.go.yo.fr/apiEya/checkSession', {
                credentials: 'include',
            });
            const data = await response.json();
            if (data.loggedIn) {
                setAuthState({ loggedIn: true, user: data.user });
            } else {
                setAuthState({ loggedIn: false, user: null });
            }
        } catch (error) {
            console.error('Error checking session:', error);
            setAuthState({ loggedIn: false, user: null });
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};