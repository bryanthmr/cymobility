import {useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import homeImage6 from "../../img/homeImage6.jpg";
import './Destination.scss';


export default function Destination({isVisible}){

    const[offres, setOffres] = useState("");

    useEffect(() => {

        const fetchData = async() => {
            try{
                const response = await fetch("https://cymobility.go.yo.fr/apiBryan/data");
                const result = await response.json();
                setOffres(result); //cf capture


            }
            catch(error){
                console.log("error")
            }

        }
        fetchData();
    }, []);







    return isVisible?(
        <>
            <div className='destination'>
                <h1>Destination</h1>

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





            </div>
        </>

    ) : null;
}