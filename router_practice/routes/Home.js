import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
    const [loading , setLoading] = useState(true);
    const [movies , setMovies] = useState([]);
    // useEffect(() => {
    //   fetch(
    //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    //   )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setMovies(result.data.movies);
    //     setLoading(false); 
    //   });
    // }, []);
    
    // refactor then to async/await
    // async => Promise 객체 반환
  
    const getMovies = async () => {
      // 2.요게 완료되길 기다리고
      const result = await (
        // 1.요게 완료되길 기다리고
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        ) // 완료되면 json 으로 바꾸고 
      ).json();
      // 다 완료되면 상태를 바꿔주는 건가?
      setMovies(result.data.movies);
      setLoading(false);
    }
    console.log(movies);
    useEffect(() => {
      getMovies();
    }, []);
    // console.log(movies);
  
    //단순히 하나의 페이지에서 리스트만 나열하고 있는데..
    // 클릭하면 다른곳으로 넘어가게 하고싶다
    // 컴포넌트를 사용할까
    // movie 라는 컴포넌트를 만들어 영화 하나 클릭하면 그 영화 상세하게 보게 해주자
  
    return (
      <div>
        {
        loading ? <h1>Loading...</h1> : 
        <div>
          {movies.map( movie => (
            <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
          ))}
          </div>
          }
      </div>
    );
}

export default Home;