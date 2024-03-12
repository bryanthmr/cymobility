import React, {useState} from 'react';
import "./Header.css";
import Presentation from "../Presentation/Presentation";
import logo from './logo1.png';
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
            <header>


                <nav>
                    <img src={logo} alt="Logo" width="100px" height="100px" className="logo"/>


                    <div className="menu">
                        <button onClick={() => handleVisible("accueil", true)}>Accueil</button>
                        <button onClick={() => handleVisible("presentation", true)}>Présentation</button>
                        <button onClick={() => handleVisible("destination", true)}>Destination</button>
                        <button onClick={() => handleVisible("contact", true)}>Contact</button>
                        <button onClick={() => handleVisible("apropos", true)}>À Propos</button>


                    </div>
                    <div className="connexion">
                        <button onClick={() => handleVisible("connexion", true)}>Me connecter</button>
                    </div>
                    <Presentation isVisible={presentationVisible}/>

                </nav>


            </header>
        </>
    );
};

export default Header;