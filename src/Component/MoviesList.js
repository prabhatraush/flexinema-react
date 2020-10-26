import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Slider from "react-slick";

import MovieCard from './MovieCard'
import PlayerModal from './PlayerModal'
import Urls from '../Urls'

const api_url = "https://api.themoviedb.org/3";

function MoviesList(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerURL] = useState('');

    const {categories, url} = props;

    useEffect( () => {

        function fetchMovies()
        {
            axios.get(api_url+''+url)
            .then(res=>{
               // console.log(res);
                setMovies(res.data.results.filter(movie=> { return (movie.poster_path!==null && movie.title!=="" && movie.overview!=="")}))
            }).catch(err=>{
                console.log(err);
            })
        }

        fetchMovies()
    }, [url])

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
                breakpoint: 710,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
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

    return (
        <div className="movies-collection">
            <div className="collection-name">
                {categories}
            </div>
            <div className="movies-list">
                <Slider {...settings}>
                    { movies && 
                        movies.map((movie,i)=>{
                            return <MovieCard key={i} movie={movie} onplay={handlePlay}/>
                        })
                    }
                </Slider>
            </div>
            {
                trailerUrl &&
                <PlayerModal trailerUrl={trailerUrl} setTrailerURL={setTrailerURL}/>
            }
            
        </div>
    )
}

export default MoviesList
