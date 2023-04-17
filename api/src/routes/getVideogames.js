const axios = require('axios')
const { Videogames, Genres } = require('../db.js')
require('dotenv').config();
const { API_KEY } = process.env;

getVideogames = async (req,res) => {

    let info
    let allVideogames = [];
    let videogame = {};
    let ruta = `https://api.rawg.io/api/games?key=${API_KEY}`
    
    try{
        //Busca en API:
        for(let i = 1; i<=5;i++){
            info = await axios.get(ruta);
            ruta = info.data.next;
            info = info.data.results;
            console.log(ruta)

            info.forEach(element => {
                videogame = {id:element.id,name:element.name,description:element.description,platforms:element.platforms,background_image:element.background_image,released:element.released,rating:element.rating,genres:element.genres};
                allVideogames.push(videogame);                
            });
        }
        //Busca en postgreSQL:
        const games = await Videogames.findAll({ include: [{
            model:Genres,
            as:"genres",
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