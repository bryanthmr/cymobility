import { useEffect, useState } from 'react';
import '../MenuSpe.css';


export default function MenuSpe () {
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

    const sendSpe = (text) => {
        console.log('Texte du bouton:', text);
    };



    return  (
            <>
                <div className="specialite-select" >

                    <table><tbody>
                    <tr>
                    {specialites && specialites.map((specialite, index) => (
                        <td key={index}><button className={'button-17'} onClick={() => sendSpe(specialite.specialite)} >{specialite.specialite}</button></td>
                    ))}
                    </tr>
                    </tbody></table>
                </div>



        </>
                )

}
