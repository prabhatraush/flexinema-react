import React from 'react'

const img_url="https://image.tmdb.org/t/p/original/";
function MovieCard(props) {

    const {movie, onplay} = props;

    return (
        <div className="movie-card" onClick={()=>onplay(movie)}>
            <div className="movie-poster">
                <img src={img_url+movie.poster_path} alt={movie.title}/>
            </div>
            <div className="movie-info">
                <div className="play_btn">
                    <i className="far fa-play-circle"></i>
                </div>
                <div className="movie-title">
                     <span>{movie.title}</span>
                </div>
                <div className="movie-category">
                    {movie.release_date}
                </div>
                <div className="movie-description">
                    {movie.overview.substring(0,150)}...
                </div>
            </div>
        </div>
    )
}

export default MovieCard
