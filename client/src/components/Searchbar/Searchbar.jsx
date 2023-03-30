import { useState } from "react";
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions.js'

export default function Searchbar(){

    const [nameGame, setNameGame] = useState("");
    const dispatch = useDispatch();

    function onSearch(name){
        if(name){
            dispatch(actions.getGame(name))
        }
      };

    const handleChange = (event)=>{
        setNameGame(
            event.target.value
        )
    };

    return(
        <div>
            <input type="search" placeholder="Ingrese nombre" onChange={handleChange}/>
            <button onClick={()=>onSearch(nameGame)}>Buscar por nombre</button>
        </div>
    );
}