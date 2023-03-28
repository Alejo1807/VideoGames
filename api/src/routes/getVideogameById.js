const axios = require('axios')

getVideogameById = async (req,res) => {

    const { idVideogame } = req.params;

    const id = parseInt(idVideogame);

    let info;
    let videogame = [];
    
if(!isNaN(id) && idVideogame.length <36){
        try{
        info = await axios.get(`https://api.rawg.io/api/games/${id}?key=df304259d23f4b7e86a2dab81bae3262`)
        videogame = info.data
        return res.status(200).json(videogame)
    } catch (error){
        return res.status(400).json({error:error.message})
    }
} else {

    try{
xz
    }catch (error){
        return res.status(400).json({error:error.message})
    }
}


}

module.exports = getVideogameById;