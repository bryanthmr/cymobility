import React from 'react';
import {Slide} from "react-slideshow-image";
import '../../styles/_home.scss';
import 'react-slideshow-image/dist/styles.css';


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

            <div className='nosServices'>
                <h1>Planifier votre mobilité international avec CyMobility</h1>
            </div>


        </div>


    )
        ;
};

export default Home;

