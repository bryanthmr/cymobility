import { useEffect, useState } from 'react';
import '../Destination.css';


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

    return  (
            <>
                <div className="specialite-select" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <table><tbody>
                    <tr>
                    {specialites && specialites.map((specialite, index) => (
                        <td key={index}><button className={'button-17'}>{specialite.specialite}</button></td>
                    ))}
                    </tr>
                    </tbody></table>
                </div>



        </>
                )

}
