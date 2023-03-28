const axios = require('axios');
const { Videogames, Genres } = require('../db.js');
const { Op } = require('sequelize');

getVideogameByName = async (req,res) => {

    let name = req._parsedUrl.query;
    name = name.slice(1).toUpperCase()

    let info;
    let allVideogames = [];
    let videogamesfiltered = [];
    
    try{

        info = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=df304259d23f4b7e86a2dab81bae3262`);
        allVideogames = info.data.results;

        for(let i=0;i<allVideogames.length;i++){

            if( allVideogames[i].name.toUpperCase().includes(name)){

                videogamesfiltered.push(allVideogames[i])
                if(videogamesfiltered.length===15) break;
            }
        }

        if(videogamesfiltered.length<15){
            
            const games = await Videogames.findAll({
                where: {
                    name:{
                        [Op.iLike]: `%${name}%`
                    } 
                }
              },
              { include: [{
                model:Genres,
                through: {
                  attributes: []
                }
            }] })
                
                for(let i=0;i<games.length;i++){
                    videogamesfiltered.push(games[i])

                    if(videogamesfiltered.length===15) break;
                }  
        }

        videogamesfiltered.length>0?res.status(200).json(videogamesfiltered):res.status(200).json({error:"no videogames were found"})

    } catch (error){
        return res.status(400).json({error:error.message})
    }

}

module.exports = getVideogameByName;