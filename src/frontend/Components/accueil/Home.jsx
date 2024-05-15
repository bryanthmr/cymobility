import React from 'react';
import {Slide} from "react-slideshow-image";
import './_home.scss';
import 'react-slideshow-image/dist/styles.css';
import {Card} from 'react-bootstrap';
import homeImage1 from '../../img/homeImage1.jpg'
import homeImage2 from '../../img/homeImage2.jpg'
import homeImage3 from '../../img/homeImage3.jpg'
import homeImage4 from '../../img/homeImage4.jpg'
import homeImage5 from '../../img/homeImage5.jpg'
import homeImage6 from '../../img/homeImage6.jpg'
import homeImage7 from '../../img/homeImage7.jpg'
import World from '../../img/World.jpg'

export default function Home({isVisible}) {

    const imagesList = [
        World,
        homeImage2,
        homeImage3,
        homeImage4,
        homeImage5,
        homeImage6,
        homeImage7
    ];


    return isVisible?(
        <div className='home'>

            <div className='titre'>
                <span>Planifier votre mobilité international avec CyMobility</span>
            </div>

            <div className="images">
                <Slide autoplay={true} duration={3000}>
                    {imagesList.map((image, index) => (
                        <div className="each-slide" key={index}>
                            <img src={image} alt=""/>
                        </div>
                    ))}
                </Slide>
            </div>


            <div className="nosServices">
                <h1>Nos services</h1>

                <div className="cartes">
                    <Card className="card1">
                        <Card.Img variant="top" src={homeImage7}/>
                        <Card.Body>
                            <Card.Title>Choisis ta destination </Card.Title>

                        </Card.Body>
                    </Card>

                    <Card className="card2">
                        <Card.Img variant="top" src={homeImage5}/>
                        <Card.Body>
                            <Card.Title>Sélectionnes tes spécialités</Card.Title>

                        </Card.Body>
                    </Card>

                    <Card className="card3">
                        <Card.Img variant="top" src={homeImage6}/>
                        <Card.Body>
                            <Card.Title>Découvres toutes les opportunités</Card.Title>

                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    ):null;
};


