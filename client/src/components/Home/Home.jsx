import Card from "../Card/Card"

export default function Home(props){

    const { videogames } = props;

    return(
        <div>
            <p>en Home</p>
            {videogames.map(videogame=>
                <Card
                    key={videogames.indexOf(videogame)}
                    name = {videogame.name}
                    genres = {videogame.genres}
                    image = {videogame.background_image}
                />
                )}
        </div>
    ) 
    
    }