const express = require('express');

const maria = require("mariadb")

const app = express();

const pool = maria.createPool({
  host: 'localhost', 
  user: 'myjuffzf_userTest',
  password: 'L#NO5!NTlOO2@uT,Z5',
  port:'3306',
  database: 'myjuffzf_Cymobility',
  connectionLimit: 5
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/apiBryan/menuDest', async  (req,res,next) => {
    let conn;
	try{
		conn=await pool.getConnection();
        const result=await pool.query('SELECT pays FROM Adresse ')
        res.status(200).send(result)
	}
	catch(error){
		res.status(404).send("Connexion ratée")
	}
    finally {
        if (conn) conn.end(); // libère la connexion
    }

});

module.exports = app;
