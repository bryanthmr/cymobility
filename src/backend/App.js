const express = require('express');

const maria = require("mariadb")
const {useState} = require("react");

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




app.get('/apiLyl/data', async  (req,res,next) => {
    let conn;
    try{
        conn=await pool.getConnection();
        const result=await pool.query("SELECT DISTINCT et.specialite FROM Etude et")// rajouter [pays_choisi, specialite_choisi] apres la virgule


        res.status(200).send(result)
    }
    catch(error){
        res.status(404).send("Connexion ratée")
    }
    finally {
        if (conn) conn.end(); // libère la connexion
    }

});


app.post("/apiLyl/ChoixSpe", async (req, res, next) => {
    let conn;

    try {

        const choixSpe = req.body;

        conn = await pool.getConnection();


        res.status(200).send("");

    } catch (error) {
        console.error("Erreur lors de l'ajout de l'adresse :", error);
        res.status(500).send("Erreur lors de l'ajout de l'adresse");
    } finally {
        if (conn) conn.end();
    }


});


module.exports=app;
