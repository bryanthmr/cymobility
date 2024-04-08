const express = require('express');

const maria = require("mariadb")

const app = express();

const pool = maria.createPool({
  host: 'localhost', 
  user: 'myjuffzf_userTest',
  password: 'L#NO5!NTlOO2@uT,Z5',
  port:'3306',
  database: 'myjuffzf_test',
  connectionLimit: 5
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/api/data', async  (req,res,next) => {
    let conn;
	try{
		conn=await pool.getConnection();
        const result=await pool.query('SELECT * FROM Etude')
        res.status(200).send(result)
	}
	catch(error){
		res.status(404).send("Connexion ratée")
	}
    finally {
        if (conn) conn.end(); // libère la connexion
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
