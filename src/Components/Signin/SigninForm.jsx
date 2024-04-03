import React from 'react';
import './SigninForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function Signin({isVisible}){
    return isVisible ? (
        <div className="login-page">
            <div className='wrapper'>
                <form action="">
                    <h1>Sign In</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Name" required/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="First Name" required/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Email" required/>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required/>
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required/>
                        <FaLock className="icon"/>
                    </div>
                    <div className="input-box">
                        <input type="date" placeholder='Date de naissance' required pattern="\d{4}-\d{2}-\d{2}"/>

                    </div>
                    <div className="input-box">
                        <div class="select-container">

                        <select name="Metier">
                            <option value="">Votre métier</option>
                            <option value="Data Science">Etudiant</option>
                            <option value="IA">Professeur</option>
                            <option value="BI">Recruteur</option>
                        </select>
                        </div>
                    </div>
                    <div className="remember-forgot">
                        < label>< input type="checkbox"/>Remember me</label>
                    </div>
                    <button type="submit">Sign In</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="#">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

//nom prenom email genre métier(liste déroulante) date de naissance