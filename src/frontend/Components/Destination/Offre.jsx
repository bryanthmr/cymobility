import {useContext, useEffect, useState} from "react";
import {Button, Card, Modal} from "react-bootstrap";
import MesCandidatures from "../MesCandidatures/MesCandidatures";
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
import './Offre.scss';
import {AuthContext} from "../../../AuthContext";


export default function Offre({isVisible,afficherCandidatures,choixDest,choixSpe}){

    const { authState, setAuthState } = useContext(AuthContext);
    const [offres, setOffres] = useState([]);
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
    const [selectedOffre, setSelectedOffre] = useState("");
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

        if(authState.loggedIn){
            const newCandidature = {
                id_eleve: authState.user.id, //FIO
                id_offre: selectedOffre.id_offre,
                statut : 'Transmis'
            };
            // Envoi de la nouvelle adresse à la route POST
            await fetch("https://cymobility.go.yo.fr/apiFio/addCandidature", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCandidature),
            })
                .then( async response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors de l\'ajout de candi2');
                    }
                    const result = await response.json();
                    setCandidatureAvant(result[0]);
                    setCandidatureApres(result[1]);




                })
                .catch(error => {
                    console.error('Erreur lors de l\'ajout de candi :', error);
                });

        }else{
            console.log("pas connecté");
        }





        setPostulerClicked(true); // Met à jour l'état pour indiquer que le bouton "Postuler" a été cliqué
    };

    useEffect(() => {
        if (postulerClicked) {
            setRajoutCandidature(CandidatureAvant.length !== CandidatureApres.length);
        }
    }, [CandidatureAvant, CandidatureApres, postulerClicked]);





    useEffect(() => {
        if (postulerClicked) {
            console.log('rajout = ', rajoutCandidature);
        }
    }, [rajoutCandidature, postulerClicked]);

    const handleVoirCandidatures= () => {
        console.log("dfgh");


    }

    useEffect(()=>{
        console.log(selectedOffre);

    },[selectedOffre]);


    return isVisible?(
        <>
            <div className='destination'>

                <div className="cartes">

                    {offres && offres.map((offre, index) => (


                        <Card onClick={() => handleCardClick(offre)}>
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
                                authState.loggedIn ?(
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
                                    <div>
                                        <p>Veuillez vous connecter avant de postuler à une offre </p>
                                    </div>

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



            </div>



        </>

    ):null;
}