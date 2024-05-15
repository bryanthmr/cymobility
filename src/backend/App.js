const express = require('express');
const bodyParser = require('body-parser');
const maria = require('mariadb');

const app = express();

const pool = maria.createPool({
    host: 'localhost',
    user: 'myjuffzf_userTest',
    password: 'L#NO5!NTlOO2@uT,Z5',
    port: '3306',
    database: 'myjuffzf_Cymobility',
    connectionLimit: 5,
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/apiEya/connexion', async (req, res, next) => {
    let conn;
    const { login, password } = req.body;
    try {
        conn = await pool.getConnection();
        const sql = 'SELECT * FROM Eleve WHERE id_eleve = ? AND mdp = ?';
        const result = await conn.query(sql, [login, password]);
        if (result.length > 0) {
            res.status(200).send({ success: true, message: 'Connexion réussie' });
        } else {
            res.status(401).send({ success: false, message: 'Identifiants incorrects' });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: 'Erreur de connexion', error });
    } finally {
        if (conn) conn.end();
    }
});

app.post('/apiEya/inscription', async (req, res, next) => {
    let conn;
    const { nom1, nom2, mail, idEleve, password, date, niveauEtude } = req.body;

    console.log('Received inscription data:', { nom1, nom2, mail, idEleve, password, date, niveauEtude });

    try {
        conn = await pool.getConnection();
        const sql = 'INSERT INTO Eleve (nom, prenom, mail, id_eleve, mdp, date_naissance, id_etude) VALUES (?, ?, ?, ?, ?, ?, (SELECT id_etude FROM Etude WHERE niveau = ?))';
        const result = await conn.query(sql, [nom1, nom2, mail, idEleve, password, date, niveauEtude]);
        res.status(200).send({ success: true, message: 'Inscription réussie' });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send({ success: false, message: 'Erreur de connexion', error });
    } finally {
        if (conn) conn.end();
    }
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
});

module.exports = app;