import React, {useState} from 'react';
import "./Header.css";
import Presentation from "../Presentation/Presentation";

const Header = () => {

    //state
    const [actualComponent,setActualComponent] = useState("accueil");
    const [presentationVisible,setPresentationVisible] = useState(false);



    //behavior

    const handleVisible = (elt,state) => {
        if(elt===actualComponent){
            return;
        }
        switch (elt){
            case "presentation":
                setPresentationVisible(state);

                handleVisible(actualComponent,false);
                setActualComponent("presentation")

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
                <button>Accueil</button>
                <button onClick={() => handleVisible("presentation", true)}>Presentation</button>
                <button>Destination</button>
                <button>Contact</button>
                <button>À Propos</button>

                <Presentation isVisible={presentationVisible}/>
            </nav>
        </header>
        </>
    );
};

export default Header;