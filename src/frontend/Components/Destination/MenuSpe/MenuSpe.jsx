import { useEffect, useState } from 'react';
import './MenuSpe.css';




export default function MenuSpe ({setChoixSpe,choixSpe}) {
    const [specialites, setSpecialites] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cymobility.go.yo.fr/apiLyl/data')
                const result = await response.json();
                console.log(result);

                // Extraire les spécialités et supprimer les doublons
                setSpecialites(result);



            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData(); // Ajouter cette ligne pour gérer les erreurs
    }, []);


    const setStyleButton = (i,spe) => {

        let buttons = document.getElementsByClassName("button-spe");
        if(choixSpe==="" || spe!==choixSpe){

            buttons[i].style.backgroundColor = "white";
            buttons[i].style.background="rgba(240, 245, 217, 0.5)";
            buttons[i].style.border="2px solid #f0f5d9";
            buttons[i].style.color="#292F36";
            buttons[i].style.borderRadius="10px";

            for(let j=0;j<buttons.length;j++){
                if(j!==i){
                    buttons[j].style.backgroundColor='#292F36';
                    buttons[j].style.border="none";
                    buttons[j].style.fontSize="medium";
                    buttons[j].style.fontFamily="Linotype Didot";
                    buttons[j].style.color="white";
                    buttons[j].style.transition="background-color 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease";
                    buttons[j].style.width='140px';


                }
            }


            setChoixSpe(spe);
        }
        else{

            buttons[i].style.backgroundColor='#292F36';
            buttons[i].style.border="none";
            buttons[i].style.fontSize="medium";
            buttons[i].style.fontFamily="Linotype Didot";
            buttons[i].style.color="white";
            buttons[i].style.transition="background-color 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease";
            buttons[i].style.width='140px';
            setChoixSpe("");
        }

    }


    return  (
            <>
                <div className="specialite-select" >

                    <table><tbody>
                    <tr>
                    {specialites && specialites.map((specialite, index) => (
                        <td key={index}><button className={'button-spe'} onClick={() => setStyleButton(index,specialite.specialite)} >{specialite.specialite}</button></td>
                    ))}
                    </tr>
                    </tbody></table>
                </div>



        </>
                )

}
