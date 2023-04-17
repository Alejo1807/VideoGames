import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import actions from "../../redux/actions";
import Card from "../Card/Card";
import Searchbar from "../Searchbar/Searchbar";
import Nogames from "../Nogames/Nogames";
import style from './Home.module.css';
import Loading from "../Loading/Loading";


export default function Home(props){

    const { videogames } = props;
    const [genres,setGenres] = useState([]);
    const dispatch = useDispatch();
    const [aside,setAside] = useState(false);

    //Paginacion
    const limit = 15; //Indica el máximo de cards en la paginación
    const paginas = Math.ceil(videogames.length/limit);
    const [posicioni,setPosicioni] = useState(0);
    const [posicionf,setPosicionf] = useState(limit);
    const [pagina, setPagina] = useState(Math.ceil(posicionf/limit))
    const [videogamesp, setVideogamesp] = useState([]);

    useEffect(()=>{
        if(videogames.length>0){
        setPagina(Math.ceil(posicionf/limit));
        setVideogamesp(videogames.slice(posicioni,posicionf));}
    },[videogames,posicioni,posicionf])

    function next(){
        if(posicionf<=videogames.length-1){
            setPosicioni(posicioni+limit);
            setPosicionf(Math.min(posicionf+limit,videogames.length));  
        }
    }

    function previous(){
        if(posicioni>limit-1){
            setPosicioni(posicioni-limit);
            setPosicionf(pagina===paginas?limit*(paginas-1):posicionf-limit);
        }
    }

    //Ordenar por nombre
    function orderGameByName(e){
        if(!videogames.hasOwnProperty('error')){
        dispatch(actions.orderGameByName(e));
        setPosicioni(0);
        setPosicionf(limit);
        }
    }

    //Ordenar por Rating
    function orderGameByRating(e){
        if(!videogames.hasOwnProperty('error')){
        dispatch(actions.orderGameByRating(e));
        setPosicioni(0);
        setPosicionf(limit);}
    }

    //Filtrar por Género
    function filterGameByGenre(e){
        if(!videogames.hasOwnProperty('error')){
        dispatch(actions.filterGameByGenre(e));
        setPosicioni(0);
        setPosicionf(limit);}
    }

    //Filtrar por Origen
    function filterGameByOrigin(e){
        if(!videogames.hasOwnProperty('error')){
        dispatch(actions.filterGameByOrigin(e));
        setPosicioni(0);
        setPosicionf(limit);}
    }

    //Mostrar todos
    function resetVideogames(){
        if(!videogames.hasOwnProperty('error')){
        dispatch(actions.resetVideogames());
        setPosicioni(0);
        setPosicionf(limit);}
    }

    // useEffect para actualizar los géneros en el filtro
    useEffect(()=>{

        async function axiosGenres(){
            try{
                const info= await axios.get('/genres');
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

    function showAside() {
        aside?setAside(false):setAside(true);
    }

    function irPagina(e){
        if(posicioni>limit-1 && posicionf<=videogames.length-1){
            setPosicioni((e.target.value-1)*limit);
            setPosicionf(parseInt((e.target.value-1)*limit)+limit);            
        }

    }

    return(
        <div className={style.home}>

            <aside>
                <div className={style.menu}>
                    <button className={style.burger} onClick={showAside}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <div>Menú</div>
                </div>

                {aside?<div className={style.aside}>
                    <Searchbar/>

                    <fieldset>
                        <div>Ordenar por Nombre</div>
                        <label>
                            <input type="radio" name="OrderByName" value="Ascendente" onChange={orderGameByName}/> Ascendente
                        </label>
                        <label>
                            <input type="radio" name="OrderByName" value="Descendente" onChange={orderGameByName}/> Descendente
                        </label>
                    </fieldset>

                    <fieldset>
                        <div>Ordenar por Rating</div>
                        <label>
                            <input type="radio" name="OrderByRating" value="Ascendente" onChange={orderGameByRating}/> Ascendente
                        </label>
                        <label>
                            <input type="radio" name="OrderByRating" value="Descendente" onChange={orderGameByRating}/> Descendente
                        </label>
                    </fieldset>

                    <fieldset>
                        <div>Filtrar por:</div>

                        <h3>Género:</h3>
                        <select name="FilterByGenres" defaultValue={'(seleccione género)'} onChange={filterGameByGenre}>
                            <option disabled="disabled">(seleccione género)</option>
                            {genres.map(genre=><option key={genres.indexOf(genre)}>{genre.name}</option>)}
                        </select>

                        <h3>Origen:</h3>
                        <select name="FilterByOrigin" defaultValue={'(seleccione origen)'} onChange={filterGameByOrigin}>
                            <option disabled="disabled">(seleccione origen)</option>
                            <option value="API">API</option>
                            <option value="PostgreSQL">PostgreSQL</option>
                        </select>
                    </fieldset>

                    <button onClick={resetVideogames} className={style.btm}>Reset</button>                    
                </div>: <div></div> }

            </aside>

            {videogames.hasOwnProperty('error')?<Nogames/>:videogames.length===0?<Loading/>:
            <div className={style.cards}>
                {videogamesp.map((videogame)=>
                    {  
                        return <Card
                        key={videogamesp.indexOf(videogame)}
                        name = {videogame.name}
                        genres = {videogame.genres}
                        image = {videogame.background_image}
                        id = {videogame.id}
                    />}
                    )}                
            </div>}

            {!videogames.hasOwnProperty('error')&&videogames.length>0?
            <div>
                <button onClick={previous} className={style.btm}>{'⇦'}</button>
                <button onClick={next} className={style.btm}>{' ⇨'}</button>
                <div>Página {pagina} de {paginas}</div>
                <label>Ir a página:</label>
                <input type="number" onChange={irPagina} className={style.input}/>
            </div>: 
            <div></div> }

        </div>
    ) 
    
    }