// MesCandidatures.js
import './MesCandidatures.scss';
import React, {useContext, useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {format} from "date-fns";
import {AuthContext} from "../../../AuthContext";

export default function MesCandidatures({isVisible}) {
    const [listeCandidatures, setListeCandidatures] = useState([]);
    const { authState, setAuthState } = useContext(AuthContext);




        const fetchData = async () => {
            console.log("recuperation des candidatures");

            let id_eleve ;

            if(authState.loggedIn){

                 id_eleve = {
                    id_eleve: authState.user.id
                };

            }else{

                id_eleve = {
                    id_eleve: '0'
                };


            }





                // Envoi de la nouvelle adresse à la route POST
                await fetch("https://cymobility.go.yo.fr/apiBryan/mesCandidatures", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(id_eleve),
                })
                    .then( async response => {
                        if (!response.ok) {
                            throw new Error('Erreur lors  de la recup des candidatures  ');
                        }
                        const result = await response.json();
                        setListeCandidatures(result);




                    })
                    .catch(error => {
                        console.error('Erreur lors de la recup des candi :', error);
                    });

        }

    useEffect(() => {
        fetchData().then();
    }, [authState.user]);



    useEffect(() => {
        fetchData().then();
    }, [isVisible]);





    const [showModal, setShowModal] = useState(false);
    const [selectedCandidature, setSelectedCandidature] = useState(null);


    const handleRowClick = (candidature) => {
        setSelectedCandidature(candidature);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCandidature(null);

    };

    const handleRetirerClick = async () => {
        // Afficher une alerte de confirmation
        const confirmation = window.confirm("Êtes-vous sûr de vouloir retirer cette candidature ?");

        // Si l'utilisateur confirme
        if (confirmation) {

            let aSupp ;

            if(authState.loggedIn){

                aSupp = {
                    id_eleve: authState.user.id,
                    id_offre: selectedCandidature.id_offre
                };

            }else{
                aSupp = {
                    id_eleve: '0',
                    id_offre: selectedCandidature.id_offre
                };


            }

            await fetch("https://cymobility.go.yo.fr/apiBryan/removeCandidature", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(aSupp),
            })
                .then(async response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors de la suppression de candi2');
                    }
                    await fetchData();
                    handleCloseModal();
                })
                .catch(error => {
                    console.error('Erreur lors de la suppression de candi :', error);
                });
        }

    }

    return isVisible? (
        <div className='container'>
            <h1 className='title'>Mes Candidatures</h1>
            <br/>
            <br/>
            <table>
                <thead>
                <tr>
                    <th>Poste</th>
                    <th>Entreprise</th>
                    <th>Statut</th>
                </tr>
                </thead>
                <tbody>
                {listeCandidatures && listeCandidatures.map((candidature, index) => (
                    <tr key={index} onClick={() => handleRowClick(candidature)}>
                        <td>{candidature.titre}</td>
                        <td>{candidature.nom}</td>
                        <td>{candidature.statut}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCandidature && selectedCandidature.titre }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedCandidature && (
                        <div>
                            <p><strong>Nom de l'entreprise:</strong> {selectedCandidature.nom}</p>
                            <p><strong>Description:</strong> {selectedCandidature.description}</p>
                            <p><strong>Mission:</strong> {selectedCandidature.mission}</p>
                            <p><strong>Profil recherché:</strong> {selectedCandidature.profil_recherche}</p>
                            <p><strong>Niveau:</strong> {selectedCandidature.niveau}</p>
                            <p><strong>Date de prise de poste:</strong> {format(new Date(selectedCandidature.date_priseDP), 'dd/MM/yyyy')}</p>
                            <p><strong>Ville:</strong> {selectedCandidature.ville}</p>
                            <p><strong>Durée:</strong> {selectedCandidature.duree} mois</p>
                            <p><strong>Appartement mise à votre disposition:</strong> {selectedCandidature.type}</p>
                            <p><strong>Salaire (approximatif) :</strong> {selectedCandidature.salaire} €</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={ handleRetirerClick}>
                        Retirer Candidature
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ):null;
}
