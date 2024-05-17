import {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import './Offre.scss';


function Offre({choixDest,choixSpe}){

    const [offres, setOffres] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            fetch("https://cymobility.go.yo.fr/apiBryan/data", {
                method: 'POST', // Spécifie la méthode HTTP
                headers: {
                    'Content-Type': 'application/json', // Définit le type de contenu
                },
                body: JSON.stringify({"choixDest": choixDest, "choixSpe": choixSpe}) // Convertit l'objet en chaîne JSON
            })
                .then(response => response.json())
                .then(data => {
                    setOffres(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        fetchData().then();
        }, [choixDest,choixSpe]);



    return (
        <>
            <div className='destination'>
                <h1 style={{color:"black"}}>Destination</h1>

                <div>


                    <div className="cartes">

                        {offres && offres.map((offre, index) => (


                            <Card index={index}>
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




            </div>
        </>

    )
}

// eslint-disable-next-line react-hooks/rules-of-hooks

export default Offre;


