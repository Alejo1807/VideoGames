import { useState, useEffect } from "react";
import axios from "axios";
import validation from "./validation.js";
import myPlatforms from "./platforms.js";
import style from './Form.module.css';

export default function Form(){

    const [genres,setGenres] = useState([]);
    const [newGame, setNewGame] = useState({name:"",description:"",platforms:"",background_image:"",released:"",rating :"",genres:[]})
    const [error,setError] = useState({name:"",description:"",platforms:"",background_image:"",released:"",rating :"",genres:[]})
    const [genresAdded,setGenreAdded] = useState([]);
    const [platformsAdded,setPlatformsAdded] = useState([]);
    
    function addGenre(e){

        if(genresAdded.some(genreAdd => genreAdd.name===e.target.value)){
            window.alert("Este género ya ha sido agregado previamente");
        }else{
            const idGenre = genres.find(genre=>genre.name===e.target.value);
            setGenreAdded([...genresAdded,idGenre]);
        }
    }

    function addPlatform(e){
        if(platformsAdded.some(platfomrAdd => platfomrAdd===e.target.value)){
            window.alert("Este género ya ha sido agregado previamente");
        }else{
            setPlatformsAdded([...platformsAdded,e.target.value]);  
        }
    }

    function onClose(gerneName){
        const genresAddedFiltered = genresAdded.filter(genre=>genre.name!==gerneName);
        setGenreAdded(genresAddedFiltered);

    }

    function onClose2(platformName){
        const platformsAddedFiltered = platformsAdded.filter(platform=>platform!==platformName);
        setPlatformsAdded(platformsAddedFiltered);
    }

    function handleInputBlur(e){
        setNewGame(
            {...newGame,
                [e.target.name]:e.target.value}
        )

        setError(
            validation({...newGame,
            [e.target.name]:e.target.value})
        )
    }

    const handleSubmit = async (evento)=>{

        const errores=Object.values(error);
        const valNewGame=Object.values(newGame).some(x=>x="" || x.length===0);

        if(errores.length===0 && !valNewGame){
            try{
                await axios.post('/videogames',newGame);
                window.alert('Videogame añadido con éxito');
            }catch(error){
                console.log(error)
            }
            
        } else {
            evento.preventDefault();
            alert("Debes diligenciar todos los campos con ✵");
        }

    }

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

    useEffect(()=>{
        const genres=genresAdded.map(genreAdded => genreAdded.id);
        setNewGame((c)=>({...c,genres}));
    },[genresAdded,setNewGame])

    useEffect(()=>{
        const platforms = platformsAdded.toString();
        setNewGame(c=>({...c,platforms}))
    },[platformsAdded,setNewGame])

    return(
        <div className={style.outside}>
            <form onSubmit={handleSubmit} className={style.form}>
                <h1>Añade tu videojuego!</h1>

                <p>Ingresa la siguiente información y haz clic en el botón "añadir":</p>
            <div className={style.separador}>
                <div className={style.columan1}>
                    <div className={style.campo}>
                        <label>Nombre videojuego✵ </label>
                        <input type="text" name="name" placeholder="Ingrese nombre (max. 40 caracteres)" onBlur={handleInputBlur}/>
                    </div>
                    {error.name?<p className={style.error}>{error.name}</p>:<br/> }

                    <div className={style.campo}>
                        <label>URL imagen videojuego✵</label>
                        <input type="url" name="background_image" placeholder="Ej. https://www.miimagen.com/img.jpg" onBlur={handleInputBlur}/>               
                    </div>
                        {error.background_image?<p className={style.error}>{error.background_image}</p>:<br/> } 

                    <div className={style.campo2}>
                        <label>Fecha de lanzamiento✵</label>
                        <input type="date" name="released"  onBlur={handleInputBlur}/>                   
                    </div>
                        {error.released?<p className={style.error}>{error.released}</p>:<br/> }                 

                    <div className={style.campo2}>
                        <label>Rating✵</label>
                        <input type="number" name="rating" step='any' onBlur={handleInputBlur}/>                                        
                    </div>
                        {error.rating?<p className={style.error}>{error.rating}</p>:<br/> }
                </div>

                <div className={style.columan1}>
                    <div className={style.campo}>
                        <label>Descripción✵:</label>
                        <textarea name="description" rows={4} placeholder="Ingrese una descripción (max. 240 caracteres)" onBlur={handleInputBlur}/>
                    </div>
                        {error.description?<p className={style.error}>{error.description}</p>:<br/> }                

                    <div className={style.campo2}>
                        <label>Añadir platafomas✵</label>
                        <select defaultValue={'(seleccione plataformas)'} name="platforms" onChange={addPlatform}>
                            <option disabled="disabled">(seleccione plataformas)</option>
                            {myPlatforms.map(myPlatform=><option key={myPlatforms.indexOf(myPlatform)}>{myPlatform}</option>)}
                        </select>
                    </div>
                    <div className={style.campo3}>
                            {platformsAdded.map(platformAdded=>
                            <div key={platformsAdded.indexOf(platformAdded)}>
                                <div>{platformAdded}<button onClick={()=>onClose2(platformAdded)}>X</button></div>
                            </div>)}
                        </div>
                    <br/>
                    <div className={style.campo2}>
                        <label>Añadir Géneros✵</label>
                        <select  defaultValue={'(seleccione géneros)'} name="genres" onChange={addGenre}>
                            <option disabled="disabled">(seleccione géneros)</option>
                            {genres.map(genre=><option key={genres.indexOf(genre)}>{genre.name}</option>)}
                        </select>              
                    </div>

                    <div className={style.campo3}>
                        {genresAdded.map(genreAdded=>
                        <div key={genresAdded.indexOf(genreAdded)}>
                            <div>{genreAdded.name}<button onClick={()=>onClose(genreAdded.name)}>X</button></div>
                        </div>)}
                    </div>   

                </div>
            </div>
                <button type="submit" className={style.btm}>Añadir Videogame</button>
            </form>
        </div>
    )
}