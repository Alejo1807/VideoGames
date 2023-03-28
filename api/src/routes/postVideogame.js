const { Videogames,VideogameGenres } = require('../db.js')

postVideogame = async (req,res) => {

const { name,description,platforms,image,released,rating,genres } = req.body

if(!name || !description || !platforms || !image || !released || !rating || !genres){
    res.status(400).json({error:'no parameters complete'});
} else{
    try{
        const newGame = await Videogames.create({
            name,
            description,
            platforms,
            image,
            released,
            rating
        }); 
        
        const VideogameId = newGame.id
    
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