import Offre from "./Offre";
import MesCandidatures from "../MesCandidatures/MesCandidatures";
import {useState} from "react";


export default function Destination({isVisible}){

    const [offreVisible, setOffreVisible] = useState(true);
    const [candidatureVisible, setCandidatureVisible] = useState(false);
    const [actualComponent, setActualComponent] = useState('offre');


    const handleVisible = (elt,state) => {
        if (elt === actualComponent && state === true) {
            return;
        }
        switch (elt) {
            case "mescandidatures":
                setCandidatureVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent("mescandidatures")
                }
                break;
            case "offre":
                setOffreVisible(state);
                if (state === true) {
                    handleVisible(actualComponent, false);
                    setActualComponent("offre")
                }
                break;
            default:
                console.log("error")
                break;
        }
    }


    return isVisible?(
        <>
            <Offre isVisible = {offreVisible}/>
            <MesCandidatures isVisible = {candidatureVisible}/>

        </>
    ):null;
}