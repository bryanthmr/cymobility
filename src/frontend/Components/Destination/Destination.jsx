import Offre from "./Offre";
import MenuDest from "./MenuDest/MenuDest";
import MenuSpe from "./MenuSpe/MenuSpe";
import {useChoix} from "./useChoix";




export default function Destination({isVisible}){

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
                <td style={styleOffre}><Offre choixSpe={choixSpe} choixDest={choixDest}/></td>
            </tr></tbody></table>

        </>
    ):null;
}