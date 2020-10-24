import React,{useState, useEffect} from 'react'
import axios from 'axios';


import MovieCard from './MovieCard';

import {PropagateLoader} from 'react-spinners';
import Youtube from 'react-youtube'
import MovieTailer from 'movie-trailer'

import Urls from '../Urls';

const api_url = "https://api.themoviedb.org/3";

function FoundMovies( props) {

    const [movies,setMovies] = useState('');
    const [trailerUrl, setTrailerURL] = useState('');
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        setTrailerURL('');
        MovieTailer(movie?.title)
        .then((res)=>{
            console.log(movie);
            const url = new URL(res);
            const vid = url.searchParams.get("v");
            setTrailerURL(vid);
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            setLoading(false);
        })
    }

    useEffect(() => {
        axios.get(api_url+Urls.searchMovies+query)
        .then(res=>{
            setMovies(res.data.results.filter(movie=> { return movie.poster_path!=null}));
            
        }).catch(err=>{  

        })
    }, [query])

    return (
        <div className="found_movies">
            <div className="found_head">
            {movies.length>0 ? "Total "+movies.length : "Sorry, no" } movies found !! 
            </div>
            {
                trailerUrl ?
                <Youtube videoId={trailerUrl} opts={opts}/>:
                (   loading && 
                    <div className="loader">
                        <PropagateLoader size={20} color={"#ffffff"}/>
                    </div>
                )
            }
            <div className="found_list">
                {
                    movies &&
                    movies.map(movie=>{
                        return <MovieCard movie={movie} onplay={handlePlay}/>
                    })
                }
            </div>
           
        </div>
    )
}

export default FoundMovies
