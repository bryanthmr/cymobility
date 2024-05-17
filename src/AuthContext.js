import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        loggedIn: false,
        user: null,
    });

    const checkSession = () => {
        const user = localStorage.getItem('user');
        if (user) {
            setAuthState({ loggedIn: true, user: JSON.parse(user) });
        } else {
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
