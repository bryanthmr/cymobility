import React, { useState } from 'react';
import './SigninForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function Signin({ isVisible, showLogin }) {
    const [nom1, setNom1] = useState('');
    const [nom2, setNom2] = useState('');
    const [mail, setMail] = useState('');
    const [date, setDate] = useState('');
    const [idEleve, setIdEleve] = useState('');
    const [password, setPassword] = useState('');
    const [niveauEtude, setNiveauEtude] = useState('');
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() - 18);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    const fetchData = async () => {
        const credentials = { nom1, nom2, mail, idEleve, password, date, niveauEtude };
        console.log("Fetching data with credentials:", credentials);

        try {
            const response = await fetch("https://cymobility.go.yo.fr/apiBryan/inscription", {
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
                window.confirm('Inscription réussie. Veuillez vous connecter.');
            } else {
                window.confirm('Échec de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        isVisible ? (
            <div className="login-page">
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Inscription</h1>
                        <div className="input-box">
                            <input onChange={(e) => setNom1(e.target.value)} value={nom1} type="text" placeholder="Nom" required />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => setNom2(e.target.value)} value={nom2} type="text" placeholder="Prénom" required />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => setMail(e.target.value)} value={mail} type="text" placeholder="Email" required />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => setIdEleve(e.target.value)} value={idEleve} type="number" placeholder="Numero Etudiant" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Mot de passe' required />
                            <FaLock className="icon" />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => setDate(e.target.value)} value={date} type="date" placeholder='Date de naissance' required  max={maxDateStr} min="1900-01-01"/>
                        </div>
                        <div className="input-box">
                            <div className="select-container">
                                <select onChange={(e) => setNiveauEtude(e.target.value)} value={niveauEtude} name="Niveau d'étude" required>
                                    <option value="">Niveau d'étude</option>
                                    <option value="ING1 - initial">ING1-initial</option>
                                    <option value="ING2 - initial">ING2-initial</option>
                                    <option value="ING3 - initial">ING3-initial</option>
                                    <option value="ING1 - apprentissage">ING1-apprentissage</option>
                                    <option value="ING2 - apprentissage">ING2-apprentissage</option>
                                    <option value="ING3 - apprentissage">ING3-apprentissage</option>
                                </select>
                            </div>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Se rappeler de moi</label>
                        </div>
                        <button type="submit">Inscription</button>
                        <div className="register-link">
                            <p>Déjà inscrit? <a href="#" onClick={() => showLogin("connexion", true)}>Se connecter</a></p>
                        </div>
                    </form>
                </div>
            </div>
        ) : null
    );
};