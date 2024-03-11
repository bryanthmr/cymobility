import "./Contact.css";


export default function Contact(){



    return(
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
                                <input style={{height: '30px'}} id={'nom'} type={'text'}/>
                            </div>
                            <div>
                                <label htmlFor={'prenom'}>Prénom</label>
                                <input style={{height: '30px' }} id={'prenom'} type={'text'}/>
                            </div>
                        </div>
                        <div className={'form-row'}>
                            <div>
                                <label htmlFor={'email'}>Email *</label>
                                <input style={{height: '30px' }} id={'email'} type={'email'} required/>
                            </div>
                        </div>
                        <div className={'form-row'}>
                            <div>
                                <label htmlFor={'champContact'}>Contacter</label>
                                <input style={{height: '80px'}} id={'champContact'} type={'text'}/>
                            </div>
                        </div>
                        <button id={'contactButton'}>Envoyer !</button>
                    </form>
                </div>
            </div>
        </>
    )
}