const { Genres } = require('../db.js');

/* const saveApiData = require('./saveApiData'); //Guarda valores de la API en la DB de postgreSQL
saveApiData(); */


const getGenres = async (req,res) => {
    //Hace consumo solo de la BD 'Genres' de postgreSQL:
    try{
        const genres = await Genres.findAll();

        res.status(200).json(genres);

    }catch(error){
        res.status(404).json({error:error})
    }

} 

module.exports=getGenres

