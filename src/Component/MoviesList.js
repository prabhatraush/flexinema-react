import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import {PropagateLoader} from 'react-spinners';

import Youtube from 'react-youtube'
import MovieTailer from 'movie-trailer'

import MovieCard from './MovieCard';

const api_url = "https://api.themoviedb.org/3";

function MoviesList(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerURL] = useState('');
    const [loading, setLoading] = useState(false);

    const {categories, url} = props;

    useEffect( () => {

        function fetchMovie()
        {
            axios.get(api_url+''+url)
            .then(res=>{
                console.log(res);
                setMovies(res.data.results)
                console.log("res");
            }).catch(err=>{
                console.log(err);
                console.log("err");
            })
        }

        fetchMovie()
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 976,
                settings: {
                  slidesToShow: 4,
                }
            },
            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      };
    
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
        MovieTailer(movie?.title+"trailer")
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

    return (
        <div class="movies-collection">
            <div className="collection-name">
                {categories}
            </div>
            <div className="movies-list">
                <Slider {...settings}>
                    { movies && 
                        movies.map(movie=>{
                            return <MovieCard movie={movie} onplay={handlePlay}/>
                        })
                    }
                </Slider>
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
        </div>
    )
}

export default MoviesList
