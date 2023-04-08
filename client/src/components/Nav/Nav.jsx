import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/form" >Añadir Videogame</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}