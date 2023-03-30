export default function Card(props){

    const { name,image,genres } = props;

    const genre = genres.map(genre => genre.name)

    return(
        <div>
            <h1>
                {name}
            </h1>
            <figure>
                <img src={image} alt={`${name}`} />
            </figure>
            <h2>
                Géneros: <span>{genre.toString()}</span> 
            </h2>
        </div>
    );
}