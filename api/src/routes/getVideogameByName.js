const axios = require('axios');
const { Videogames, Genres } = require('../db.js');
const { Op } = require('sequelize');
require('dotenv').config();
const { API_KEY } = process.env;

getVideogameByName = async (req,res) => {

    let name = req._parsedUrl.query;
    name = name.slice(1).toUpperCase() //Convierte en mayúscula (igulamente se hace los filtros para garantizar no case sensitive)
    let name2 = name.replace(/%20/g," ") //Para solventar el problema de espacion en la URL definidos ocmo %20
    console.log(name2)
    let info;
    let allVideogames = [];
    let videogamesfiltered = [];
    
    try{
        //Busca en API
        info = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        allVideogames = info.data.results;

        for(let i=0;i<allVideogames.length;i++){

            if( allVideogames[i].name.toUpperCase().includes(name2)){ //Verifica que contenga la palabra (no aproximaciones como lo hace la API perse)

                videogamesfiltered.push(allVideogames[i])
                if(videogamesfiltered.length===15) break; //Verifica que no pase de 15 resultados
            }
        }
        //Busca en postgreSQL
        if(videogamesfiltered.length<15){
            
            const games = await Videogames.findAll({
                where: {
                    name:{
                        [Op.iLike]: `%${name2}%` //iLike es no case-sensitive y % busca el substring 
                    } 
                },
                include: {
                model:Genres,
                as:"genres",
                through: {
                  attributes: []
                }
            } 
              },
               )
                
                for(let i=0;i<games.length;i++){
                    videogamesfiltered.push(games[i])

                    if(videogamesfiltered.length===15) break; //Verfica que no pase de 15 resultados
                }  
        }

        //Envía respuesta condicionalmente (si hay videogames que cohincidan con el nombre)
        videogamesfiltered.length>0?res.status(200).json(videogamesfiltered):res.status(200).json({error:"no videogames were found"})

    } catch (error){
        return res.status(400).json({error:error.message})
    }

}

module.exports = getVideogameByName;