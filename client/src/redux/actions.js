import axios from 'axios';

const getGame = (name)=>{
    return async(dispatch) => {
        try{
            let payload;
            let info;

            if(name){
                info = await axios.get(`/videogames/name?=${name}`);
                payload=info.data;
            } else {
                info = await axios.get(`/videogames`);
                payload=info.data;                
            }

            dispatch({
                type:"GET_GAMES",
                payload:payload
            })

        } catch(error){
            console.log(Error(error));   
        }
    }
}

const orderGameByName = (e)=>{
    return {
        type: "ORDER_NAME",
        payload:e.target.value
    }
}

const orderGameByRating = (e)=>{
    return {
        type: "ORDER_RATING",
        payload:e.target.value
    }
}

const filterGameByGenre = (e)=>{
    return {
        type: "FILTER_GENRE",
        payload:e.target.value
    }
}

const filterGameByOrigin = (e)=>{
    return {
        type: "FILTER_ORIGIN",
        payload:e.target.value
    }
}

const resetVideogames = ()=>{
    return {type:"RESET_VIDEOGAMES"}
}

const actions = {getGame,orderGameByName,orderGameByRating,filterGameByGenre,filterGameByOrigin,resetVideogames};

export default actions;