const express = require('express');

const maria = require("mariadb")

const app = express();

const pool = maria.createPool({
        host: 'localhost',
        user: 'myjuffzf_userTest', // à changer
        password: 'L#NO5!NTlOO2@uT,Z5', // à changer
        port:'3306',
        database: 'myjuffzf_test', // à changer
        connectionLimit: 5
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/apiLyl/data', async (req, res, next) => {
    let conn;
    const specialite_choisi = "Réseaux et Sécurité";

    try{
        conn = await pool.getConnection();
        const result = await pool.query('SELECT DISTINCT et.specialite FROM Etude et');
        res.status(200).send(result)
    }
    catch(error){
        res.status(404).send("Connexion ratée")
    }
    finally {
        if (conn) conn.end();
    }
});



