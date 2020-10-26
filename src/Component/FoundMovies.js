import React,{useState, useEffect} from 'react'
import axios from 'axios';

import PlayerModal from './PlayerModal'
import MovieCard from './MovieCard'
import Urls from '../Urls'

const api_url = "https://api.themoviedb.org/3";

function FoundMovies( props) {

    const [movies,setMovies] = useState('');
    const [trailerUrl, setTrailerURL] = useState('');

    const query = props.match.params.qid;
    console.log(props);
    const opts = {
        height:"390px",
        width:"100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    const handlePlay = (movie) =>{

        setTrailerURL('');

        axios.get(api_url+Urls.fetchMovieVideo(movie?.id))
        .then(res=>{
            console.log();
            setTrailerURL(res.data.results[0].key);
        }).catch(err=>{
            console.log(err);
            setTrailerURL("onb-0y5IR1U");
        })

    }

    useEffect(() => {
        axios.get(api_url+Urls.searchMovies+query)
        .then(res=>{
            setMovies(res.data.results.filter(movie=> { return (movie.poster_path!==null && movie.title!=="" && movie.overview!=="")}));
            
        }).catch(err=>{  

        })
    }, [query])
    console.log(movies);
    return (
        <div className="found_movies">
            <div className="found_head">
            {movies.length>0 ? "Total "+movies.length : "Sorry, no" } movies found !! 
            </div>
            {
                trailerUrl &&
                <PlayerModal trailerUrl={trailerUrl} setTrailerURL={setTrailerURL}/>
            }
            <div className="found_list">
                {
                    movies &&
                    movies.map((movie,i)=>{
                        return <MovieCard key={i} movie={movie} onplay={handlePlay}/>
                    })
                }
            </div>
           
        </div>
    )
}

export default FoundMovies
