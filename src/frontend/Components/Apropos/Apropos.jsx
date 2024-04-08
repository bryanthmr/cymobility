import './Apropos.css';

export default function Apropos({isVisible}) {
    return isVisible?(
        <div>

            <>
            <section className="main-section">
                <div className="left-compartment">
                    <h2>Contactez-nous!</h2>
                    <div className="text-box">
                        <a href="#" className="btn btn-white btn-animate">Contact</a>
                    </div>

                </div>
                <div className="right-compartment">
                    <h2>Nous connaître</h2>
                    <h3>Qui sommes-nous ?</h3>
                    <p>Fondée par une équipe d'étudiants à CY TECH, Cymobility est née
                        de la volonté de rendre les études à l'étranger plus accessibles, transparentes et
                        enrichissantes pour tous les étudiants.
                        Unis par une vision commune de favoriser la mobilité étudiante à l'échelle mondiale.</p>

                    <h3>Notre engagement :</h3>
                    <p>Chez Cymobility, nous nous engageons à offrir un service de qualité supérieure à chaque étape du
                        processus de mobilité étudiante. Nous nous efforçons de comprendre les besoins uniques de chaque
                        étudiant et de les accompagner dans leur parcours, en leur fournissant des ressources, des
                        conseils et un soutien personnalisé tout au long de leur expérience à l'étranger.</p>

                    <h3>Notre vision :</h3>
                    <p>Notre vision est de devenir la plateforme de référence pour la mobilité étudiante, en connectant les étudiants, les établissements d'enseignement et les organismes de
                        soutien à travers le monde. Nous croyons fermement que chaque étudiant devrait avoir la
                        possibilité de vivre une expérience internationale enrichissante et que la diversité culturelle
                        et intellectuelle est essentielle à l'éducation et à la croissance personnelle.</p>
                </div>
            </section>
            </>
        </div>

    ):null;
}

