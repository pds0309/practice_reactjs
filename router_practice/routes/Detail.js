import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const { id } = useParams();
    const [loading , setLoading] = useState(true);
    const [movie , setMovie] = useState([]);
    const getMovie = async () => {
        const result = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
            setLoading(false);
            setMovie(result.data.movie);
            console.log(result);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
    <div>
        {loading ? <h2>Loading...</h2> : <h1>Movie you Selected</h1>}
        <h2>{movie.title_long}</h2><hr />
        <img src={movie.medium_cover_image}></img><br /><span>평점 : {movie.rating}</span> <br />
        <span>{movie.description_intro}</span><br />

    </div>
    );
}

export default Detail;