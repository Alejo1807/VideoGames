const axios = require('axios');
const { Genres } = require('../db.js')

// función para guardar en API los registros de los géneros que hay en la API para que el consumo se haga desde postgreSQL:
const saveApiData = async () => {

    const apiGenres = await axios.get('https://api.rawg.io/api/genres?key=df304259d23f4b7e86a2dab81bae3262').then(info => info.data.results).catch(error => {{error:error.messague}})

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

