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

    const sendSpe =  async (text) => {
        // Création d'une nouvelle adresse

        const specialiteChoisi = text;

// Envoi de la nouvelle adresse à la route POST
        await fetch("https://cymobility.go.yo.fr/apiLyl/ChoixSpe", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(specialiteChoisi),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de l\'ajout de l\'adresse2');
                }
                console.log('Adresse ajoutée avec succès');

            })
            .catch(error => {
                console.error('Erreur lors de l\'ajout de l\'adresse :', error);
            });



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
