import React, {useEffect, useState} from 'react'
import axios from 'axios';

import PlayerModal from '../Component/PlayerModal'

import Urls from '../Urls';

const img_url="https://image.tmdb.org/t/p/original/";
const api_url = "https://api.themoviedb.org/3";

function Banner() {
    const [movie, setMovie] = useState('');
    const [bannerTrailerURL, setBannerTrailerURL] = useState('');

    useEffect(()=>{

        axios.get(api_url+''+Urls.fetchOriginals)
            .then(res=>{
             //   console.log(res.data.results[Math.floor(Math.random()*res.data.results.length)]);
                setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length)])
                console.log("res");
            }).catch(err=>{
                console.log(err);
                console.log("err");
            })
    },[])

    const opts = {
        height:"450px",
        width:"100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    const handlePlay = (movie) =>{

        axios.get(api_url+Urls.fetchMovieVideo(movie?.id))
        .then(res=>{
            console.log();
            setBannerTrailerURL(res.data.results[0].key);
        }).catch(err=>{
            console.log(err);
            setBannerTrailerURL("onb-0y5IR1U");
        })
    }

    //console.log(movie);
    return (
            <div className="app_banner"
                style={{
                    backgroundSize:"cover",
                    backgroundImage:`url("${img_url+movie?.poster_path}")`,
                    backgroundPosition:"center center"
                }}
                >
                {
                
                        movie &&
                        <div className="banner_container">
                            <h1 className="movie_title">{movie?.title}</h1>
                            <div className="banner_btn">
                                <button onClick={()=>handlePlay(movie)}> <i className="far fa-play-circle"></i> Play</button>
                            </div>
                            <h1 className="moive_description">{movie?.overview.substring(0,349)} . . . </h1>
                        </div>
                
                }

                {
                    bannerTrailerURL &&
                    <PlayerModal trailerUrl={bannerTrailerURL} setTrailerURL={setBannerTrailerURL}/>
            
                }
            </div>
    )
}

export default Banner
