import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import homeImage6 from '../../img/homeImage6.jpg';
import './Destination.css';

export default function Destination({ isVisible }) {
    const [specialites, setSpecialites] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cymobility.go.yo.fr/apiLyl/data');
                const result = await response.json();
                console.log(result);

                // Extraire les spécialités et supprimer les doublons
                const specialitesSet = result;



            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData(); // Ajouter cette ligne pour gérer les erreurs
    }, []);

    return isVisible ? (
       <>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ paddingBottom: '400px' }}></span>
            <select name="spe" className="specialite-select" id="specialite-select">
                {specialites.map((specialite, index) => (
                    <option key={index} value={specialite}>{specialite}</option>
                ))}
            </select>
        </div>
        <div>
            <ul>
                {specialites && specialites.map((specialite, index) => (
                    <li key={index}>

                    </li>
                ))}
            </ul>
        </div></>


) :
    null;
}
