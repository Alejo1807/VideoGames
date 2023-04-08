import { NavLink } from "react-router-dom";
import style from './Card.module.css'

export default function Card(props){

    const { name,image,genres,id } = props;

    const genre = genres.map(genre => genre.name)
    return(
        <div className={style.card}>
            <div className={style.inside}>
                <NavLink to={`/detail/${id}`} className={style.nav}>
                    <h1><p>{name}</p></h1>
                    <figure className={style.figure}>
                            <img src={image} alt={`${name}`} />
                    </figure>
                    <h2>
                        Géneros: <span>{genre.toString().replaceAll(',',', ')}</span> 
                    </h2> 
                </NavLink>
            </div>

        </div>
    );
}