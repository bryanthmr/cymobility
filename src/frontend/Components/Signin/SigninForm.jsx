import React from 'react';
import './SigninForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function Signin({isVisible}){
    return isVisible ? (
        <div className="login-page">
            <div className='wrapper'>
                <form action="">
                    <h1>Inscription</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Nom" required/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Prénom" required/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Numero Etudiant" required/>
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Mot de passe' required/>
                        <FaLock className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="date" placeholder='Date de naissance' required/>

                    </div>
                    <div className="input-box">
                        <div className="select-container">
                            <select name="Niveau d'étude">
                                <option value="">Niveau d'étude</option>

                                <option value="">ING1-initial</option>
                                <option value="">ING2-initial</option>
                                <option value="">ING3-initial</option>
                                <option value="">ING1-apprentissage</option>
                                <option value="">ING2-apprentissage</option>
                                <option value="">ING3-apprentissage</option>

                            </select>
                        </div>
                    </div>
                    <div className="remember-forgot">
                        < label>< input type="checkbox"/>Se rappeler de moi</label>
                    </div>
                    <button type="submit">Inscription</button>
                    <div className="register-link">
                        <p>Déjà inscris?  <a href="#">Se connecter</a></p>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

//nom prenom email genre métier(liste déroulante) date de naissance
//<label htmlFor="Métier">Métier: </label>
