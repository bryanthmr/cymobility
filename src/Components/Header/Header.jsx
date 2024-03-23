import React, {useState} from 'react';

import Presentation from "../Presentation/Presentation";
import logo from './logo1.png';
import Home from "../accueil/Home";
import "./Header.css";
import Contact from "../Contact/Contact";
import Login from "../Login/LoginForm";

const Header = () => {

    //state
    const [actualComponent,setActualComponent] = useState("accueil");
    const [presentationVisible,setPresentationVisible] = useState(false);
    const [accueilVisible, setAccueilVisible] = useState(true);
    const [destinationVisible,setDestinationVisible]=useState(false);
    const [ContactVisible,setContactVisible]=useState(false);
    const[AproposVisible,setAproposVisible]=useState(false);
    const[ConnexionVisible,setConnexionVisible]=useState(false);


    //behavior

    const handleVisible = (elt,state) => {
        if(elt===actualComponent && state===true){
            return;
        }
        switch (elt){
            case "presentation":
                setPresentationVisible(state);
                if(state===true){
                handleVisible(actualComponent,false);
                setActualComponent("presentation")
            }
                break;
            case "accueil":
                setAccueilVisible(state);
                if(state===true) {
                    handleVisible(actualComponent, false);
                    setActualComponent("accueil")
                }
                break;
            case "destination":
                setDestinationVisible(state);
                if(state===true) {
                    handleVisible(actualComponent, false);
                    setActualComponent("destination")
                }
                break;
            case "contact":
                setContactVisible(state);
                if(state===true) {
                    handleVisible(actualComponent, false);
                    setActualComponent("contact")
                }
                break;
            case "apropos":
                setAproposVisible(state);
                if(state===true) {
                    handleVisible(actualComponent, false);
                    setActualComponent("apropos")
                }
                break;
            case "connexion":
                setConnexionVisible(state);
                if(state===true) {
                    handleVisible(actualComponent, false);
                    setActualComponent("connexion")
                }
                break;
            default:
                console.log("error")
                break;
        }
    }

    //printing

    return (
        <>
            <header className="header-background">
                <nav className="menu-container">
                    <img src={logo} alt="Logo" width="70px" height="70px" className="logo"/>
                    <div className="menu-buttons">
                        <button onClick={() => handleVisible("accueil", true)}>Accueil</button>
                        <button onClick={() => handleVisible("presentation", true)}>Présentation</button>
                        <button onClick={() => handleVisible("destination", true)}>Destination</button>
                        <button onClick={() => handleVisible("contact", true)}>Contact</button>
                        <button onClick={() => handleVisible("apropos", true)}>À Propos</button>
                    </div>
                    <div className="connexion-button">
                        <button onClick={() => handleVisible("connexion", true)}>Me connecter</button>
                        <button onClick={() => handleVisible("inscription", true)}>M'inscrire</button>

                    </div>
                </nav>
            </header>
            <Presentation isVisible={presentationVisible}/>
            <Home isVisible={accueilVisible}/>
            <Contact isVisible={ContactVisible} />
            <Login isVisible={ConnexionVisible} />
        </>
    );

};

export default Header;