import React from 'react';
import {Slide} from "react-slideshow-image";
import '../../styles/_home.scss';
import 'react-slideshow-image/dist/styles.css';
import {Card} from 'react-bootstrap';


const Home = () => {
    const imagesList = [
        '/homeImage1.jpg',
        '/homeImage2.jpg',
        '/homeImage3.jpg',
        '/homeImage4.jpg',
        '/homeImage5.jpg',
        '/homeImage6.jpg',
        '/homeImage7.jpg'
    ];


    return (
        <div className='home'>

            <div className='titre'>
                <h1>Planifier votre mobilité international avec CyMobility</h1>
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
                        <Card.Img variant="top" src='/homeImage7.jpg'/>
                        <Card.Body>
                            <Card.Title>Choisis ta destination </Card.Title>

                        </Card.Body>
                    </Card>

                    <Card className="card2">
                        <Card.Img variant="top" src='/homeImage5.jpg'/>
                        <Card.Body>
                            <Card.Title>Sélectionnes tes spécialités</Card.Title>

                        </Card.Body>
                    </Card>

                    <Card className="card3">
                        <Card.Img variant="top" src='/homeImage6.jpg'/>
                        <Card.Body>
                            <Card.Title>Découvres toutes les opportunités</Card.Title>

                        </Card.Body>
                    </Card>

                </div>
            </div>

            <div className="contact">
                <h1>Contact</h1>
                <h3>Cergy, France</h3>
                <h3>info@mysite.com</h3>
                <h3>123-456-7890</h3>
            </div>




        </div>


    )
        ;
};

export default Home;

