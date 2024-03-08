import imgAvion from "../../img/avionQuiVole.webp"
import imgSpecialites from "../../img/specialites.webp"
import imgOpportunites from "../../img/opportunites.webp"
import {useState} from "react";
export default function Presentation(){
    //state
    const [presentationVisible,setPresentationVisible] = useState(false);
    //Behavior


    //Printing
    return(

        <>

            <h1>Planifier votre mobilité international avec CyMobility</h1>
            <p>CyMobility se distingue par son expertise dans la planification de la mobilité internationale des étudiants ingénieurs. Nous comprenons que chaque étudiant a des besoins et des aspirations uniques, c'est pourquoi nous adoptons une approche personnalisée pour chaque parcours. Notre processus de planification commence par une évaluation approfondie des objectifs académiques et professionnels de l'étudiant, suivi par l'élaboration d'un plan de mobilité sur mesure. Ce plan intègre des sélections de cours, des stages internationaux et des opportunités de recherche, assurant ainsi que chaque étudiant tire le maximum de son expérience à l'étranger tout en progressant efficacement dans son cursus d'ingénierie.</p>
            <br/>
            <table>

                <tbody>
                    <tr>
                        <td><p><strong>Choisissez votre destination</strong></p>
                            <p>Chez CyMobility, nous offrons une palette diversifiée de destinations internationales, chacune offrant des expériences uniques et enrichissantes pour nos étudiants ingénieurs. Notre réseau d'universités partenaires s'étend sur plusieurs continents, offrant des opportunités dans des environnements académiques et culturels variés. Nous travaillons en étroite collaboration avec les étudiants pour identifier la destination qui correspond le mieux à leurs objectifs académiques et personnels, en tenant compte de facteurs tels que les domaines d'étude spécifiques, les préférences linguistiques, et les objectifs de carrière.</p></td>
                        <td><img src={imgAvion} alt={"Avion qui vole "} width="100%" height="100%"/> </td>
                    </tr>
                    <tr>
                        <td><img src={imgSpecialites} alt="spécialités informatiques" width="80%" height="80%"/> </td>
                        <td>
                            <p><strong>Filtrez en fonction de votre spécialités</strong></p>
                            <p>L'adéquation entre les spécialités de notre école d'ingénieurs et les destinations de mobilité est primordiale chez CyMobility. Nous veillons à ce que les étudiants puissent poursuivre leurs spécialisations dans des universités qui sont non seulement reconnues pour leur excellence académique mais qui offrent également des programmes alignés sur les dernières tendances et innovations dans leur domaine d'expertise. Que ce soit en génie mécanique, en informatique, en énergie durable ou en biotechnologies, nous facilitons l'accès à des institutions qui renforcent et complètent l'expertise de nos étudiants, favorisant ainsi une expérience académique globale et cohérente. </p></td>
                    </tr>
                    <tr>
                        <td>
                        <p><strong>Découvrez toutes les opportunites</strong></p>
                        <p>La mobilité internationale avec CyMobility ouvre un monde d'opportunités pour nos étudiants ingénieurs. Au-delà de l'acquisition de compétences techniques et académiques de pointe, les étudiants bénéficient d'une immersion culturelle qui forge leur adaptabilité et leur sensibilité internationale. Ces expériences internationales favorisent le développement de compétences interculturelles cruciales dans le marché du travail globalisé d'aujourd'hui. De plus, nos étudiants tissent des réseaux professionnels internationaux et découvrent des perspectives de carrière à l'échelle mondiale, les préparant ainsi à devenir des leaders innovants dans leurs domaines respectifs.</p>
                        </td>
                        <td>
                            <img src={imgOpportunites} alt="Opportunités" width="80%" height="80%"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )


}