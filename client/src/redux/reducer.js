const initialState = {
    videogames:[],
    videogamesFiltered:[]
};

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case "GET_GAMES":
            return{
                videogames:action.payload,
                videogamesFiltered:action.payload
            }
        case "FILTER_GENDER":
            return {
                ...state,
                videogamesFiltered:state.videogames.filter(game =>
                    game.genres.some(genre => genre.name === action.payload)
                )
            };
        case "FILTER_ORIGIN":
            return {
                ...state,
                videogamesFiltered:state.videogames.filter(game =>
                    action.payload?game.id.length<36:game.id.length===36    
                )
            };
        case "ORDER_NAME":
            return {
                ...state,
                videogamesFiltered:[...state.videogames].sort((a,b)=>{
                    if(action.payload==="Ascendente")
                    {   
                        if (a.name > b.name) {return 1;}
                        if (a.name < b.name) {return -1;}
                        return 0;} 
                    else {
                        if (b.name > a.name) {return 1;}
                        if (b.name < a.name) {return -1;}
                        return 0;
                    }
                })
            };
        case "ORDER_RATINGS":
                return {
                    ...state,
                    videogamesFiltered:[...state.videogames].sort((a,b)=>{
                        if(action.payload==="Ascendente") return a.ratings - b.ratings;
                        return b.ratings - a.ratings;
                    })    
                };
        default:
            return initialState;
    };
};

export default reducer