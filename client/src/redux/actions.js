import axios from 'axios';

const getGame = (name)=>{
    return async(dispatch) => {
        try{
            let payload;
            let info;

            if(name){
                info = await axios.get(`http://localhost:3001/videogames/name?=${name}`);
                payload=info.data;
            } else {
                info = await axios.get(`http://localhost:3001/videogames`);
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

const actions = {getGame};

export default actions;