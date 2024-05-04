const express = require('express');

const maria = require("mariadb")

const app = express();
const nodemailer = require('nodemailer');
const pool = maria.createPool({
  host: 'localhost', 
  user: 'myjuffzf_userTest',
  password: 'L#NO5!NTlOO2@uT,Z5',
  port:'3306',
  database: 'myjuffzf_test',
  connectionLimit: 5
});
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/apiEya/data', async  (req,res,next) => {
    let conn;
	try{
		conn=await pool.getConnection();
        const result=await pool.query('SELECT * FROM Eleve')
        res.status(200).send(result)
	}
	catch(error){
		res.status(404).send("Connexion ratée")
	}
    finally {
        if (conn) conn.end(); // libère la connexion
    }

});

app.post('/apiEya/sendEmail', async (req, res) => {
    const { nom, prenom, email, message } = req.body;

    // création d'un transporter nodemailer
    const transporter = nodemailer.createTransport({

        auth: {
            user: 'contact@cymobility.go.yo.fr',
            pass: 'anNSF4m:5:a^:;4S',
        },
    });

    // définition du message
    const mailOptions = {
        from: 'contact@cymobility.go.yo.fr',
        to: email,
        subject: 'Confirmation de votre message',
        text: `Bonjour ${prenom} ${nom},\n\nMerci pour votre message :\n\n${message}\n\nCordialement,\nL'équipe de mon site`,
    };

    // envoi du message
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l envoi du message test.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Votre message a été envoyé avec succès !');
        }
    });
});




module.exports = app;
