import {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import homeImage6 from "../../img/homeImage6.jpg";
import './Destination.scss';


export default function Destination({isVisible}){

    const[offres, setOffres] = useState("");
    const[adresses, setAdresses] = useState("");
    useEffect(() => {

        const fetchData = async() => {
            try{
                const response = await fetch("https://cymobility.go.yo.fr/apiFio/data");
                const result = await response.json();
                setOffres(result[0]); //cf capture
                setAdresses(result[1]);

            }
            catch(error){
                console.log("error")
            }

        }
        fetchData();
    }, []);

    // TEST EYA

    const addAddress = async () => {
        // Création d'une nouvelle adresse

        const newAddress = {
            ville: "Nouvelle Ville",
            rue: "Nouvelle Rue",
            numero_voie: 999,
            pays: "Nouveau Pays"
        };

// Envoi de la nouvelle adresse à la route POST
        await fetch("https://cymobility.go.yo.fr/apiFio/addAdresse", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAddress),
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


    }




    return isVisible?(
        <>
            <div className='destination'>
                <h1>Destination</h1>
                <button onClick={addAddress}>Ajouter une adresse</button>
                <div>
                    <h2>Études</h2>

                        <div className="cartes">

                        {offres && offres.map((offre, index) => (


                                <Card >
                                    <Card.Header>{offre.nom}</Card.Header>

                                    <Card.Body>
                                        <Card.Title>{offre.titre}</Card.Title>

                                        <Card.Text>
                                            <strong> Ville : </strong>{offre.ville}<br/>
                                            <strong> Niveau : </strong>{offre.niveau}<br/>
                                            <strong> Durée : </strong>{offre.duree} mois
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                        ))}
                        </div>

                </div>

                <div>
                    <h2>Adresses</h2>
                    <ul>
                        {adresses && adresses.map((adresse, index) => (
                            <li key={index}>
                                <p>Ville: {adresse.ville}</p>
                                <p>Rue: {adresse.rue}</p>
                                <p>Numéro de voie: {adresse.numero_voie}</p>
                                <p>Pays: {adresse.pays}</p>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </>

    ) : null;
}