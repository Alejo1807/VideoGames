import { useState } from "react";
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions.js'
import style from './Searchbar.module.css'
import lupa from '../../utils/img/lupablanca-removebg-preview.png'

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
        <div className={style.searchbar}>
            <input type="search" placeholder="Buscar por nombre..." onChange={handleChange}/>
            <button onClick={()=>onSearch(nameGame)}> <img src={lupa} alt="🔍︎" /> </button>
        </div>
    );
}