import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function Login({ isVisible, showSignin }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const fetchData = async () => {
        const credentials = { login, password };
        console.log("Fetching data with credentials:", credentials);

        try {
            const response = await fetch("https://cymobility.go.yo.fr/apiTheo/connexion", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response data:", data);

            if (data.success) {
                console.log('Connexion réussie');
            } else {
                console.log('Échec de la connexion');
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with login:", login, "password:", password);
        fetchData();
    };

    return (
        isVisible ? (
            <div className="login-page">
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Connexion</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Numéro Etudiant"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required
                            />
                            <FaUser className="icon" />
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                placeholder='Mot de passe'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Se rappeler de moi</label>
                            <a href="#">Mot de passe oublié?</a>
                        </div>
                        <button type="submit">Connexion</button>
                        <div className="register-link">
                            <p>Pas encore de compte? <a href="#" onClick={() => showSignin("inscription", true)}>S'inscrire</a></p>
                        </div>
                    </form>
                </div>
            </div>
        ) : null
    );
};
