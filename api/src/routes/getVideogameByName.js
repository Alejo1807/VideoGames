const axios = require('axios');

getVideogameByName = async (req,res) => {

    let name = req._parsedUrl.query;
    name = name.slice(1).toUpperCase()

    let info;
    let allVideogames = [];
    let videogamesfiltered = [];
    let videogame = {};
    
    try{

        for(let i = 1; i<=3;i++){
            info = await axios.get(`https://api.rawg.io/api/games/${i}?key=df304259d23f4b7e86a2dab81bae3262`);
            videogame = info.data;
            allVideogames.push(videogame);
        }

        for(let i=0;i<allVideogames.length;i++){

            if( allVideogames[i].name.toUpperCase().includes(name)){

                videogamesfiltered.push(allVideogames[i])

                if(videogamesfiltered.length===15) break;
            }
        }

        videogamesfiltered.length>0?res.status(200).json(videogamesfiltered):res.status(200).json({error:"no search results were found"})

    } catch (error){
        return res.status(400).json({error:error.message})
    }

}

module.exports = getVideogameByName;