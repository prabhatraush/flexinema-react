import React, {useState} from 'react'
import {useHistory } from 'react-router-dom'

function SearchBox() {
    const history = useHistory();
    const [query, setQuery] = useState('');

    const handleSearch = () =>{
        history.push("/search-result/"+query);
        console.log(query);
        
    }

    return (
        <div className="search-bar">
            <div className="search-query">
                <input type="text" placeholder="Search movies" onChange={(e)=>setQuery(e.target.value)}/>
            </div>
            <div className="search-btn">
                <span onClick={()=>handleSearch()}><i className="fas fa-search"></i></span>
            </div>
            
        </div>
    )
}

export default SearchBox
