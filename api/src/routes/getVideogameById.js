const axios = require('axios');
const { Videogames, Genres } = require('../db.js');
require('dotenv').config();
const { API_KEY } = process.env;


getVideogameById = async (req,res) => {

    const { idVideogame } = req.params;

    const id = parseInt(idVideogame);
//Condicional que define si se busca en API o postgreSQL:   
if(!isNaN(id) && idVideogame.length <36){ //verifica que sea número y en caso de tener 36 dígitos pasa a ser buscado en postgreSQL (así se definió clave)
    //Busca en API
    try{
        const info = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        const videogame = info.data
        return res.status(200).json(videogame)
    } catch (error){
        return res.status(400).json({error:error.message})
    }
} else {
    //Busca en postgreSQL 
    try{
        const game = await Videogames.findByPk(idVideogame,{ include: [{
            model:Genres,
            as:"genres",
            through: {
              attributes: []
            }
        }] })

        return game?res.status(200).json(game):res.status(401).json({error:"any videogame found"})

    }catch (error){
        return res.status(400).json({error:error.message})
    }
}


}

module.exports = getVideogameById;