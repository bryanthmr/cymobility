import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import homeImage6 from '../../img/homeImage6.jpg';
import './MenuSpe.css';
import MenuSpe from "./MenuSpe/MenuSpe";

export default function Destination({ isVisible }) {
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

    return isVisible ? (
            <>

                <MenuSpe/>
               </>



        ) :
        null;
}
