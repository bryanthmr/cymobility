import React, { useState, useContext } from 'react';
import Presentation from '../Presentation/Presentation';
import logo from './logo1.png';
import Home from '../accueil/Home';
import './Header.css';
import Contact from '../Contact/Contact';
import Login from '../Login/LoginForm';
import Signin from '../Signin/SigninForm';
import Destination from '../Destination/Destination';
import Apropos from '../Apropos/Apropos';
import MesCandidatures from '../MesCandidatures/MesCandidatures';
import { AuthContext } from '../../../AuthContext'; // Importer le contexte d'authentification

const Header = () => {
    // state
    const [actualComponent, setActualComponent] = useState('accueil');
    const [presentationVisible, setPresentationVisible] = useState(false);
    const [accueilVisible, setAccueilVisible] = useState(true);
    const [destinationVisible, setDestinationVisible] = useState(false);
    const [ContactVisible, setContactVisible] = useState(false);
    const [AproposVisible, setAproposVisible] = useState(false);
    const [ConnexionVisible, setConnexionVisible] = useState(false);
    const [InscriptionVisible, setInscriptionVisible] = useState(false);
    const [mesCandidaturesVisible, setMesCandidaturesVisible] = useState(false);

    const { authState, setAuthState } = useContext(AuthContext); // Utiliser le contexte d'authentification

    // behavior
    const handleVisible = (elt, state) => {
        if (elt === actualComponent && state === true) {
            return;
        }
        switch (elt) {
            case 'presentation':
                setPresentationVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('presentation');
                }
                break;
            case 'accueil':
                setAccueilVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('accueil');
                }
                break;
            case 'destination':
                setDestinationVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('destination');
                }
                break;
            case 'contact':
                setContactVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('contact');
                }
                break;
            case 'apropos':
                setAproposVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('apropos');
                }
                break;
            case 'connexion':
                setConnexionVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('connexion');
                }
                break;
            case 'inscription':
                setInscriptionVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('inscription');
                }
                break;
            case 'mesCandidatures':
                setMesCandidaturesVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent('mesCandidatures');
                }
                break;
            default:
                console.log('error');
                break;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setAuthState({ loggedIn: false, user: null });
        setActualComponent('accueil');
    };

    // printing
    return (
        <>
            <header className='header-background'>
                <nav className='menu-container'>
                    <img src={logo} alt='Logo' width='90px' height='90px' className='logo' />
                    <div className='menu-buttons'>
                        <button onClick={() => handleVisible('accueil', true)}>Accueil</button>
                        <button onClick={() => handleVisible('presentation', true)}>Présentation</button>
                        <button onClick={() => handleVisible('destination', true)}>Destination</button>
                        <button onClick={() => handleVisible('contact', true)}>Contact</button>
                        <button onClick={() => handleVisible('apropos', true)}>À Propos</button>
                    </div>
                    <div className='connexion-button'>
                        {authState.loggedIn ? (
                            <>
                                <span>Bienvenue, {authState.user.name}</span>
                                <button onClick={() => handleVisible('mesCandidatures', true)}>Mes candidatures</button>
                                <button onClick={handleLogout}>Se déconnecter</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => handleVisible('connexion', true)}>Me connecter</button>
                                <button onClick={() => handleVisible('inscription', true)}>M'inscrire</button>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            <Presentation isVisible={presentationVisible} />
            <Home isVisible={accueilVisible} showHome={handleVisible} />
            <Contact isVisible={ContactVisible} />
            <Login isVisible={ConnexionVisible} showSignin={handleVisible} showHome={handleVisible} />
            <Signin isVisible={InscriptionVisible} showLogin={handleVisible} />
            <Destination isVisible={destinationVisible} />
            <Apropos isVisible={AproposVisible} />
            <MesCandidatures isVisible={mesCandidaturesVisible} />

            <div className='contact'>
                <div id='divTitre'>
                    <h1 id='titre'>Contact</h1>
                </div>
                <div className='ContactInfo'>
                    <h3 id='ville'>Cergy, France</h3>
                    <h3 id='mail'>info@mysite.com</h3>
                    <h3 id='num'>123-456-7890</h3>
                </div>
            </div>
        </>
    );
};

export default Header;
