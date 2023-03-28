const { Videogames,VideogameGenres } = require('../db.js')

postVideogame = async (req,res) => {

const { name,description,platforms,image,released,rating,genres } = req.body

//Condicional que verifica que todos los parámetros para el videogame vengan por body:
if(!name || !description || !platforms || !image || !released || !rating || !genres){
    res.status(400).json({error:'no parameters complete'});
} else{
    try{ //crea registro en "Videogames"
        const newGame = await Videogames.create({
            name,
            description,
            platforms,
            image,
            released,
            rating
        }); 
        
        const VideogameId = newGame.id
        
        //crea registro(s) en VideogameGenres según los géneros que se le pasaron en arreglo por body:
        for(let i = 0; i<genres.length;i++){
            let GenreId = genres[i];
    
            await VideogameGenres.create({
                VideogameId,
                GenreId
            })
    
        }
    
        res.status(200).json(newGame);
    
    } catch (error){
        return res.status(400).json({error:error.message})
    }
}

}

module.exports = postVideogame;