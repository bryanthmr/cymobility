const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const argon2 = require('argon2');
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

// Configuration CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.options('*', cors(corsOptions)); // Gérer explicitement les requêtes pré-vol

// Middleware pour inclure les en-têtes CORS dans toutes les réponses
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Routes
app.post('/apiEya/connexion', async (req, res, next) => {
    let conn;
    const { login, password } = req.body;
    console.log('Trying to connect to the database with login:', login);
    try {
        conn = await pool.getConnection();
        console.log('Connected to the database');
        const sql = 'SELECT id_eleve, prenom, mdp FROM Eleve WHERE id_eleve = ?';
        const result = await conn.query(sql, [login]);
        console.log('Query executed, result:', result);
        if (result.length > 0) {
            const user = result[0];
            console.log('User found:', user);

            const passwordMatch = await argon2.verify(user.mdp, password);
            console.log('Password match:', passwordMatch);

            if (passwordMatch) {
                console.log('User authenticated successfully');
                let userId = user.id_eleve;
                const userPrenom = user.prenom;

                res.status(200).json({ success: true, message: 'Connexion réussie', user: { id: userId, name: userPrenom } });
            } else {
                console.log('Password does not match');
                res.status(401).json({ success: false, message: 'Identifiants incorrects' });
            }
        } else {
            console.log('User not found');
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
        const hashedPassword = await argon2.hash(password);
        console.log('Hashed password:', hashedPassword);

        const sql = 'INSERT INTO Eleve (nom, prenom, mail, id_eleve, mdp, date, id_etude) VALUES (?, ?, ?, ?, ?, ?, (SELECT id_etude FROM Etude WHERE niveau = ?))';
        const result = await conn.query(sql, [nom1, nom2, mail, idEleve, hashedPassword, date, niveauEtude]);
        console.log('User registered:', result);

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

// Middleware d'erreur
app.use((err, req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.status(err.status || 500);
    res.json({ success: false, message: err.message });
});

module.exports = app;
