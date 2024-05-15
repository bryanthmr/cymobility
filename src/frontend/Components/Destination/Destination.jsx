import Offre from "./Offre";
import MenuDest from "./MenuDest/MenuDest";
import MenuSpe from "./MenuSpe/MenuSpe";


export default function Destination({isVisible}){
    return isVisible?(
        <>
            <MenuSpe/>
            <MenuDest/>
            <Offre/>
        </>
    ):null;
}