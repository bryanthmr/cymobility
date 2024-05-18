import {useEffect, useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import MesCandidatures from "../MesCandidatures/MesCandidatures";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
import './Offre.scss';


export default function Offre({isVisible,afficherCandidatures,choixDest,choixSpe}){

    const [offres, setOffres] = useState([{}]);
    const[rajoutCandidature, setRajoutCandidature]= useState("");


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

    const [showModal, setShowModal] = useState(false);
    const [selectedOffre, setSelectedOffre] = useState(null);
    const [postulerClicked, setPostulerClicked] = useState(false);



    const handleCardClick = (offre) => {
        setSelectedOffre(offre);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedOffre();
        setPostulerClicked(false);
    };


    const [CandidatureAvant, setCandidatureAvant] = useState("")
    const [CandidatureApres, setCandidatureApres] = useState("")



    const handlePostulerClick = async () => {

        // Création d'une nouvelle adresse
        console.log(selectedOffre);


        const newCandidature = {
            id_eleve: "2", //FIO
            id_offre: selectedOffre.id_offre,
            statut : 'Transmis'
        };

        useEffect(() => {
            if (postulerClicked) {
                console.log('rajout = ', rajoutCandidature);
            }
        }, [rajoutCandidature, postulerClicked]);

        const handleVoirCandidatures= () => {
            console.log("dfgh");


        }


    return isVisible?(
        <>
            <div className='destination'>
                <h1 style={{color:"black"}}>Destination</h1>
                <button onClick={addAddress}>Ajouter une adresse</button>
                <div>
                    <h2>Études</h2>

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
                <div>
                    <Modal show={showModal} onHide={handleCloseModal} size="md">
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedOffre && selectedOffre.titre}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {postulerClicked ? (
                                rajoutCandidature ? (
                                    <div>
                                        <p>Nous vous remercions pour votre intérêt.☺</p>
                                        <p>L'offre a été ajoutée à vos candidatures. Pour y accéder, veuillez cliquer sur le bouton "Mes
                                            candidatures" ci-dessous ou en haut de la page. Toutes les informations nécessaires à votre candidature
                                            ont été récupérées grâce à votre numéro étudiant.</p>
                                    </div>
                                ) : (
                                    <p>Vous avez déja candidaté à cette offre.</p>
                                )
                            ) : (
                                selectedOffre && (
                                    <div>
                                        <p><strong>Nom de l'entreprise:</strong> {selectedOffre.nom}</p>
                                        <p><strong>Description:</strong> {selectedOffre.description}</p>
                                        <p><strong>Mission:</strong> {selectedOffre.mission}</p>
                                        <p><strong>Profil recherché:</strong> {selectedOffre.profil_recherche}</p>
                                        <p><strong>Niveau:</strong> {selectedOffre.niveau}</p>
                                        <p><strong>Date de prise de poste:</strong> {format(new Date(selectedOffre.date_priseDP), 'dd/MM/yyyy')}</p>
                                        <p><strong>Ville:</strong> {selectedOffre.ville}</p>
                                        <p><strong>Durée:</strong> {selectedOffre.duree} mois</p>
                                        <p><strong>Appartement mise à votre disposition:</strong> {selectedOffre.type}</p>
                                        <p><strong>Salaire (approximatif) :</strong> {selectedOffre.salaire} €</p>
                                    </div>
                                )
                            )}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={postulerClicked ? () => handleVoirCandidatures(): handlePostulerClick}>
                                {postulerClicked ?  "Voir mes candidatures" : "Postuler" }
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div>
                    <p>ASUPPRIMER</p>
                    <p>ASUPPRIMER</p>
                    <p>ASUPPRIMER</p>
                    <p>ASUPPRIMER</p>
                    <p>ASUPPRIMER</p>
                    <p>ASUPPRIMER</p>
                    <p>ASUPPRIMER</p>



                </div>





            </div>
        </>

    ):null;
}