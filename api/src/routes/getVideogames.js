const axios = require('axios')
const { Videogames, Genres } = require('../db.js')

getVideogames = async (req,res) => {

    let info
    let allVideogames = [];
    let videogame = {};
    
    try{
        //Busca en API:
        for(let i = 1; i<=3;i++){
            info = await axios.get(`https://api.rawg.io/api/games/${i}?key=df304259d23f4b7e86a2dab81bae3262`).then(info => info.data).catch((error)=>{{error:error}});
            videogame = {id:info.id,name:info.name,description:info.description,platforms:info.platforms,image:info.background_image,released:info.released,rating:info.rating,genres:info.genres};
            allVideogames.push(videogame);
        }
        //Busca en postgreSQL:
        const games = await Videogames.findAll({ include: [{
            model:Genres,
            through: {
              attributes: []
            }
        }] })
        //Añade al arreglo:
         for(let i = 0; i<games.length;i++){
            allVideogames.push(games[i])
         }

        return res.status(200).json(allVideogames)

    } catch (error){
        return res.status(400).json({error:error.message})
    }
}

module.exports = getVideogames;