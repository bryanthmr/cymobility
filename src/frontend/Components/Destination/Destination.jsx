import Offre from "./Offre";
import MesCandidatures from "../MesCandidatures/MesCandidatures";


export default function Destination({isVisible}){
    return isVisible?(
        <>
            <Offre/>
            <MesCandidatures/>

        </>
    ):null;
}