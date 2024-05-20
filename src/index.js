import React from 'react';
import ReactDOM from 'react-dom/client';
import './frontend/index.css';
import App from './frontend/App';
import { AuthProvider } from './AuthContext'; // Importer le contexte d'authentification

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);
