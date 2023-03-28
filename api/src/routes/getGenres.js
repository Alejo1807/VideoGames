const { Genres } = require('../db.js');

/* const saveApiData = require('./saveApiData');
saveApiData(); */


const getGenres = async (req,res) => {

    try{
        const genres = await Genres.findAll();

        res.status(200).json(genres);

    }catch(error){
        res.status(404).json({error:error})
    }

} 

module.exports=getGenres

