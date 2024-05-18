const express = require('express');
const bodyParser = require('body-parser');
const maria = require('mariadb');

const app = express();

const pool = maria.createPool({
    host: 'localhost', // Assurez-vous que l'hôte est correct
    user: 'myjuffzf_userTest', // Assurez-vous que l'utilisateur est correct
    password: 'L#NO5!NTlOO2@uT,Z5', // Assurez-vous que le mot de passe est correct
    port: '3306', // Assurez-vous que le port est correct
    database: 'myjuffzf_Cymobility', // Assurez-vous que la base de données est correcte
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
    console.log('Trying to connect to the database with login:', login);
    try {
        conn = await pool.getConnection();
        console.log('Connected to the database');
        const sql = 'SELECT id_eleve, prenom FROM Eleve WHERE id_eleve = ? AND mdp = ?';
        const result = await conn.query(sql, [login, password]);
        console.log('Query executed, result:', result);
        if (result.length > 0) {
            const user = result[0];
            console.log('User found:', user);

            // Convert BigInt to string
            const userId = user.id_eleve.toString();
            const userPrenom= user.prenom;

            res.status(200).json({ success: true, message: 'Connexion réussie', user: { id: userId, name: userPrenom } });
        } else {
            res.status(401).json({ success: false, message: 'Identifiants incorrects' });
        }
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ success: false, message: 'Erreur de connexion', error: error.message });
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

app.get('/apiEya/checkSession', (req, res) => {
    const user = req.query.user;
    if (user) {
        res.status(200).send({ loggedIn: true, user: JSON.parse(user) });
    } else {
        res.status(401).send({ loggedIn: false });
    }
});

module.exports = app;