import React, {useEffect, useState} from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function Login({isVisible, showSignin}){

    const [login, setLogin] = useState()

    const [password, setPassword] = useState()

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch("https://cymobility.go.yo.fr/apiTheo/connexion");
                const result = await response.json();
                setLogin(result);
                return result.map();
            }
            catch(error){
                console.log("error")
            }
        }
        fetchData();
    }, []);

    return (
        isVisible ? (

            <div className="login-page">
                <div className='wrapper'>
                    <form action="">
                        <h1>Connexion</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Numéro Etudiant" required/>
                            <FaUser className="icon"/>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder='Mot de passe' required />
                            <FaLock className="icon"/>
                        </div>
                        <div className="remember-forgot">
                        < label>< input type="checkbox" />Se rappeler de moi</label >
                            <a href="#">Mot de passe oublié?</a>
                        </div>
                        <button type="submit" >Connexion</button>
                        <div className="register-link">
                            <p>Pas encore de compte? <a href="#" onClick={() => showSignin("inscription", true)}>S'inscrire</a></p>
                        </div>
                    </form>
                </div>
            </div>
        ): null
    );
};

