import React from 'react'

import Youtube from 'react-youtube'


function PlayerModal(props){
    const {trailerUrl, setTrailerURL} = props;

    const opts = {
        height:"490px",
        width:"100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    return(
        <div className="player_modal">
            <div class="close_btn">
                <span onClick={()=>setTrailerURL('')}><i class="far fa-times-circle"></i></span>
            </div>
            <div className="player_container">
                <Youtube videoId={trailerUrl} opts={opts}/>
            </div>
        </div>
    )
}

export default PlayerModal