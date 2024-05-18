import './Apropos.css';

import React from "react";

export default function Apropos({isVisible}) {
    return isVisible?(
        <div className="apropos-page">

            <>
                <section className="main-section">

                    <div className="right-compartment">
                        <h2>Nous connaître...</h2>

                        <h3>Qui sommes-nous ?</h3>
                        <br/>
                        <p>Fondée par une équipe d'étudiants à CY TECH, Cymobility est née
                            de la volonté de rendre les études à l'étranger plus accessibles, transparentes et
                            enrichissantes pour tous les étudiants.
                            Unis par une vision commune de favoriser la mobilité étudiante à l'échelle mondiale.</p>
                        <br/>
                        <h3>Notre engagement :</h3>
                        <br/>
                        <p>Chez Cymobility, nous nous engageons à offrir un service de qualité supérieure à chaque étape du
                            processus de mobilité étudiante. Nous nous efforçons de comprendre les besoins uniques de chaque
                            étudiant et de les accompagner dans leur parcours, en leur fournissant des ressources, des
                            conseils et un soutien personnalisé tout au long de leur expérience à l'étranger.</p>
                        <br/>
                        <h3>Notre vision :</h3>
                        <br/>
                        <p>Notre vision est de devenir la plateforme de référence pour la mobilité étudiante, en connectant
                            les étudiants, les établissements d'enseignement et les organismes de
                            soutien à travers le monde. Nous croyons fermement que chaque étudiant devrait avoir la
                            possibilité de vivre une expérience internationale enrichissante et que la diversité culturelle
                            et intellectuelle est essentielle à l'éducation et à la croissance personnelle.</p>
                        <br/>
                        <br/>
                        <img src="" alt="Logo" width="90px" height="90px" className="logo2"/>

                    </div>
                </section>
            </>
        </div>

    ) : null;
}

