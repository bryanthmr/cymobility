import MenuDest from "./MenuDest/MenuDest";


export default function Destination({isVisible}){


    return isVisible?(
        <><h1>Destination</h1>
        <MenuDest/></>


    ):null;
}