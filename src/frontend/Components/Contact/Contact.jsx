import "./Contact.css";


export default function Contact({isVisible}){
    const sendEmail = async (e) => {
        e.preventDefault(); // empêche le comportement par défaut du formulaire

        // collecte des données du formulaire
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('champContact').value;

        // envoi des données au serveur back-end
        const response = await fetch('https://localhost:4200/apiEya/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nom, prenom, email, message }),
        });

        // vérification de la réponse du serveur
        if (response.ok) {
            alert('Votre message a été envoyé avec succès !');
        } else {
            alert('Erreur lors de l envoi du message.');
        }
    };
    return isVisible?(
        <div className="contact-page">
        <>
            <div id={'contactContent'}>
                <div id={'adressesContent1'}>
                    <div id={'adressesContent2'}>
                        <h2> Contactez-nous</h2>
                        <p id={'adresses'}>
                            47 rue des Couronnes 75020 Paris, <br/>
                            France <br/><br/>
                            01 23 45 67 89 <br/>
                            bryan@cymobility.go.yo.fr<br/>
                        </p>
                    </div>
                </div>

                <div id={'formContent'}>
                    <form id={'contactForm'} method={'POST'} action={'#'}>
                        <div className={'form-row'}>
                            <div>
                                <label htmlFor={'nom'}>Nom</label>
                                <input style={{height: '30px'}} id={'nom'} type={'text'} required/>
                            </div>
                            <div>
                                <label htmlFor={'prenom'}>Prénom</label>
                                <input style={{height: '30px' }} id={'prenom'} type={'text'} required/>
                            </div>
                        </div>
                        <div className={'form-row'}>
                            <div>
                                <label htmlFor={'email'}>Email</label>
                                <input style={{height: '30px' }} id={'email'} type={'email'} required/>
                            </div>
                        </div>
                        <div className={'form-row'}>
                            <div>
                                <label htmlFor={'champContact'}>Votre message: </label>
                                <input style={{height: '80px'}} id={'champContact'} type={'text'} required/>
                            </div>
                        </div>
                        <button id={'contactButton'} onClick={sendEmail}>Envoyer !</button>
                    </form>
                </div>
            </div>
        </>
        </div>
    ):null;
}