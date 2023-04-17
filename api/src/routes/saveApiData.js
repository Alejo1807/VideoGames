const axios = require('axios');
const { Genres } = require('../db.js')
require('dotenv').config();
const { API_KEY } = process.env;


// función para guardar en API los registros de los géneros que hay en la API para que el consumo se haga desde postgreSQL:
const saveApiData = async () => {

    const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`).then(info => info.data.results).catch(error => {{error:error.messague}})

    const genre=[];
    //Recorre los géneros encontrados en API y los agrega al modelo: tabla Genres
    for(let i=0;i<apiGenres.length;i++){
        genre[i]= await Genres.create({
            id:apiGenres[i].id,
            name:apiGenres[i].name
        })
    }

}

module.exports=saveApiData;

