import { NavLink } from "react-router-dom";

export default function Card(props){

    const { name,image,genres,id } = props;

    const genre = genres.map(genre => genre.name)
    return(
        <div>
            <NavLink to={`/detail/${id}`}>
            <h1>
                {name}
            </h1>
            <figure>
                <img src={image} alt={`${name}`} />
            </figure>
            <h2>
                Géneros: <span>{genre.toString()}</span> 
            </h2>
            </NavLink>

        </div>
    );
}