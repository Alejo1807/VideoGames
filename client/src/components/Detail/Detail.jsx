import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import style from './Detail.module.css'

export default function Detail(){

    const [game,setGame] = useState({});
    const [platformsArray,setPlatformsArray] = useState([]);
    const [genres,setGenres] = useState([]);
    const [descripcion,setDescripcion] = useState("No return")
    const [fecha,setFecha] =useState()
    const { id } = useParams();
    const navigate = useNavigate();

    function backToHome(){
        navigate("/home");
      }

    //Este useEffect trae los datos de la carta desde el Server para procesar sus atributos en el 'detail'
    useEffect(()=>{

        async function axiosData(){
            try{
                const info = await axios.get(`http://localhost:3001/videogames/${id}`);
                const data = info.data;
    
                if(data.name){
                    setGame(data);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            }catch(error){
                console.log("estoy en error")
                window.alert("No hay personajes con ese ID");
            }
        }
        axiosData()
    }
    ,[id])

    //Este useEffect setea la 'description', 'platforms' y 'genres' para que puedan ser renderizados en el 'detail'
    useEffect(()=>{
        //Verificamos que ya se haya seteado un 'game'
        if(Object.values(game).length>0){  //En caso afirmativo

        setDescripcion(game.description); //Generamos la descripción
        let fechaGame = new Date(game.released)
        setFecha(fechaGame.toLocaleDateString());

        let plataforma;
        let generos;
        let origin;
        
        console.log(game)
        game.id.length===36?origin="PostgreSQL":origin="API";
        
        //determinamos el origen según el 'id' recibido:
        if (origin==="API"){
            //Si viene de API extrae las plataformas según la estructura que está definida en la api
            plataforma = game.platforms.map(platform=>platform.platform.name);
            setPlatformsArray(plataforma);
        } else {
            //Si viene de PostgreSQL generamos un Array (ya que ahí se define como un String las plataformas)
            plataforma=game.platforms.split(",")
            setPlatformsArray(plataforma);
        };

        //Extraemos los nombres de los géneros 
        generos=game.genres.map(genre=>genre.name);
        setGenres(generos);}
    },[game])
    
//se define la descripcion a través de 'dangerouslySetInnerHTML' ya que viene como un string con HTML internamente
    return(
        <div className={style.division}>
            <div className={style.columna1}>

                <h1>{game.name}</h1>

                <div className={style.contenedor}>
                    <div> <div> ID </div>  {game.id}</div>
                    <div><div> Lanzamiento </div> {fecha}</div>
                    <div><div> Rating    </div> {game.rating} </div>
                </div>
                <br />
                <h2>Descripción:</h2>
                <div className={style.descripcion} dangerouslySetInnerHTML={{__html:descripcion}}/> 

            </div>
              
            <div className={style.columna2}>
                <figure><img src={game.background_image} alt={game.name} /></figure>
                <div className={style.contenedor2}>Plataformas: {platformsArray.map(p=><div key={platformsArray.indexOf(p)}>{p}</div>)}</div>
                <div className={style.contenedor2}>Géneros: {genres.map(p=><div key={genres.indexOf(p)}>{p}</div>)}</div>
            </div>
            <br />
            <div className={style.btm}>
             <button onClick={backToHome}>Volver</button>                
            </div>

        </div>
    )
}