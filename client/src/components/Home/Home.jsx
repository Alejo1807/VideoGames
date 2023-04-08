import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../../redux/actions";
import Card from "../Card/Card";
import Searchbar from "../Searchbar/Searchbar";
import style from './Home.module.css'


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
        <div className={style.home}>  
            <aside className={style.aside}>
                <Searchbar/>

                <fieldset>
                    <legend>Ordenar por Nombre:</legend>
                    <label>
                        <input type="radio" name="OrderByName" value="Ascendente" onChange={orderGameByName}/> Ascendente
                    </label>
                    <label>
                        <input type="radio" name="OrderByName" value="Descendente" onChange={orderGameByName}/> Descendente
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Ordenar por Rating:</legend>
                    <label>
                        <input type="radio" name="OrderByRating" value="Ascendente" onChange={orderGameByRating}/> Ascendente
                    </label>
                    <label>
                        <input type="radio" name="OrderByRating" value="Descendente" onChange={orderGameByRating}/> Descendente
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Filtrar por:</legend>

                    <h2>Género:</h2>
                    <select name="FilterByGenres" onChange={filterGameByGenre}>
                        {genres.map(genre=><option key={genres.indexOf(genre)}>{genre.name}</option>)}
                    </select>

                    <h2>Origen:</h2>
                    <select name="FilterByOrigin" onChange={filterGameByOrigin}>
                        <option value="API">API</option>
                        <option value="PostgreSQL">PostgreSQL</option>
                    </select>
                </fieldset>

                <button onClick={resetVideogames}>Reset</button>
            </aside>

            <div className={style.cards}>
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