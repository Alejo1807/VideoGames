const axios = require('axios');
const { Videogames, Genres } = require('../db.js');

getVideogameById = async (req,res) => {

    const { idVideogame } = req.params;

    const id = parseInt(idVideogame);
    
if(!isNaN(id) && idVideogame.length <36){
        try{
        const info = await axios.get(`https://api.rawg.io/api/games/${id}?key=df304259d23f4b7e86a2dab81bae3262`)
        const videogame = info.data
        return res.status(200).json(videogame)
    } catch (error){
        return res.status(400).json({error:error.message})
    }
} else {

    try{
        const game = await Videogames.findByPk(idVideogame,{ include: [{
            model:Genres,
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