import Offre from "./Offre";
import MenuDest from "./MenuDest/MenuDest";
import MenuSpe from "./MenuSpe/MenuSpe";
import {useChoix} from "./useChoix";
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



    const {choixSpe, setChoixSpe, choixDest, setChoixDest} = useChoix();

    const styleOffre = {
        width: '100%',
        display: 'inline-block',
        height: "200%"
    }
    const stylePays = {
        width: '10%',


    }

    const styleTable = {
        width:'100%',
        height:'100%',


    }



    return isVisible?(
        <>
            <MenuSpe setChoixSpe={setChoixSpe} choixSpe={choixSpe} />
            <table style={styleTable}><tbody>
            <tr>
                <td style={stylePays}><MenuDest setChoixDest={setChoixDest} choixDest={choixDest}/></td>
                <td style={styleOffre}><Offre isVisible = {offreVisible} choixSpe={choixSpe} choixDest={choixDest}/></td>
            </tr></tbody></table>




        </>
    ):null;
}