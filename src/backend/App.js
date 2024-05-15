const express = require('express');

const maria = require("mariadb");

const bodyParser = require("body-parser");


const app = express();

const pool = maria.createPool({
  host: 'localhost', 
  user: 'myjuffzf_userTest', // à changer
  password: 'L#NO5!NTlOO2@uT,Z5', // à changer
  port:'3306',
  database: 'myjuffzf_test', // à changer
  connectionLimit: 5
});

app.use(bodyParser.json());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/apiFio/data', async  (req,res,next) => {
    let conn;
    const pays_choisi = "États-Unis";
    const specialite_choisi = "Réseaux et Sécurité";
    try{
		conn=await pool.getConnection();
        const result=await pool.query('SELECT of.id_offre, of.titre, of.description, of.mission, of.duree, of.date_priseDP, of.salaire, of.profil_recherche, en.nom, ad.ville, ap.type, et.niveau\n' +
            'FROM  Offre of,  Adresse ad ,  Entreprise en ,  Appartement ap ,  Etude et \n' +
            'where of.id_entreprise = en.id_entreprise\n' +
            'and of.ID_adresse_offre = ad.id_adress\n' +
            //'and ad.pays = ? \n' +
            //'and et.specialite = ? \n' +
            '    and of.ID_appartement = ap.id_appart\n' +
            '    and of.id_etude = et.id_etude;', )// rajouter [pays_choisi, specialite_choisi] apres la virgule
        const result2=await pool.query('SELECT * FROM Adresse')
        const result3 = [];
        result3[0] = result
        result3[1] = result2
        res.status(200).send(result3)
	}
	catch(error){
		res.status(404).send("Connexion ratée")
	}
    finally {
        if (conn) conn.end(); // libère la connexion
    }

});






app.post("/apiFio/addAdresse", async (req, res, next) => {
    let conn;

    try {

        const { ville, rue, numero_voie, pays } = req.body;
        conn = await pool.getConnection();
        const response=await conn.query('INSERT INTO Adresse (ville, rue, numero_voie, pays) VALUES (?, ?, ?, ?)', [ville, rue, numero_voie, pays]);
        //const response=await pool.query("SELECT * FROM Adresse");


        res.status(200).send("");

    } catch (error) {
        console.error("Erreur lors de l'ajout de l'adresse :", error);
        res.status(500).send("Erreur lors de l'ajout de l'adresse");
    } finally {
        if (conn) conn.end();
    }

});



module.exports = app;

