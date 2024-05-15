import Offre from "./Offre";


export default function Destination({isVisible}){
    return isVisible?(
        <>
            <Offre/>
        </>
    ):null;
}