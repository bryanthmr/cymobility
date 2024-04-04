const express = require('express');
const maria = require("mariadb")

const app = express();

//maria.createPool({host: process.env.DB_HOST, user: process.env.DB_USER, connectionLimit: 5});
app.use((req,res,next) => { async function asyncFunction() {
    try {

        const conn = await maria.createConnection({
            host: 'cymobility.go.yo.fr',
            user: 'myjuffzf_userTest',
            password: 'L#NO5!NTlOO2@uT,Z5',
            database:'myjuffzf_test',
            port: "3306",
            ssl: {
                // Cela active l'utilisation de SSL, recommandé pour la sécurité
                rejectUnauthorized: true // Cela vérifie que le certificat du serveur est valide
            },
            // Activation de la récupération de la clé publique
            allowPublicKeyRetrieval: true

        });

        console.log("connected ! connection id is " + conn.threadId);
    } catch (err) {
        console.log("not connected due to error: " + err);
    }}



    asyncFunction();
    next();}
)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/api/test', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff);
    next();
});

module.exports = app;