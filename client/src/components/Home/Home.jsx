import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../../redux/actions";
import Card from "../Card/Card";
import Searchbar from "../Searchbar/Searchbar";


export default function Home(props){

    const { videogames } = props;
    const [genres,setGenres] = useState([]);
    const dispatch = useDispatch();

    function orderGameByName(e){
        dispatch(actions.orderGameByName(e))
    }

    function orderGameByRating(e){
        dispatch(actions.orderGameByRating(e))
    }

    function filterGameByGenre(e){
        dispatch(actions.filterGameByGenre(e))
    }

    function filterGameByOrigin(e){
        dispatch(actions.filterGameByOrigin(e))
    }

    function resetVideogames(){
        dispatch(actions.resetVideogames())
    }

    useEffect(()=>{

        async function axiosGenres(){
            try{
                const info= await axios.get('http://localhost:3001/genres');
                const data = info.data;

                if(data){
                    setGenres(data)
                }else{
                    window.alert("No se encontraron datos");
                }

            }catch(error){
                window.alert("No se encontraron datos");
            } 
        }
        axiosGenres();
    },[setGenres])

    return(
        <div>
            <div>
                <select name="OrderByName" onChange={orderGameByName}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="OrderByRatings" onChange={orderGameByRating}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="FilterByGenres" onChange={filterGameByGenre}>
                    {genres.map(genre=><option key={genres.indexOf(genre)}>{genre.name}</option>)}
                </select>
                <select name="FilterByOrigin" onChange={filterGameByOrigin}>
                    <option value="API">API</option>
                    <option value="PostgreSQL">PostgreSQL</option>
                </select>
                <button onClick={resetVideogames}>Reset</button>
            </div>
            <br/>
            <div>
                <Searchbar/>
                {videogames.map((videogame)=>
                    {  
                        return <Card
                        key={videogames.indexOf(videogame)}
                        name = {videogame.name}
                        genres = {videogame.genres}
                        image = {videogame.background_image}
                        id = {videogame.id}
                    />}
                    )}                
            </div>

        </div>
    ) 
    
    }