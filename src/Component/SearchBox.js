import React, {useState} from 'react'


function SearchBox() {

    const [query, setQuery] = useState('');

    const handleSearch = () =>{
        console.log(query);
    }
    return (
        <div className="search-bar">
            <div className="search-query">
                <input type="text" placeholder="Search movies" onChange={(e)=>setQuery(e.target.value)}/>
            </div>
            <div className="search-btn">
                <span onClick={()=>handleSearch()}><i class="fas fa-search"></i></span>
            </div>
        </div>
    )
}

export default SearchBox
