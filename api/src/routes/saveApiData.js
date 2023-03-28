const axios = require('axios');
const { Genres } = require('../db.js')

const saveApiData = async () => {

    const apiGenres = await axios.get('https://api.rawg.io/api/genres?key=df304259d23f4b7e86a2dab81bae3262').then(info => info.data.results).catch(error => {{error:error.messague}})

    const genre=[];

    for(let i=0;i<apiGenres.length;i++){
        genre[i]= await Genres.create({
            id:apiGenres[i].id,
            name:apiGenres[i].name
        })
    }

}

module.exports=saveApiData;

