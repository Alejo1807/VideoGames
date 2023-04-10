import { NavLink } from "react-router-dom";
import style from './Nav.module.css'

export default function Nav(){
    return(
        <div className={style.nav}>
            <div className={style.div}> <span>Henry Videogames!</span> </div>
            <div className={style.navs}>
                <NavLink className={({isActive})=> isActive ? style.active : style.navlink} to="/home">Home</NavLink>
                <NavLink className={({isActive})=> isActive ? style.active : style.navlink} to="/form" >Añadir Videogame</NavLink>
                <NavLink className={({isActive})=> isActive ? style.active : style.navlink} to="/about">About</NavLink>
            </div>
        </div>
    )
}