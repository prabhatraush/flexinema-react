import React, {useState, useEffect} from 'react'
import SearchBox from './SearchBox'

function Header() {
    const [show, changeHeader] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >100)
            {
                changeHeader(true);
            }
            else{
                changeHeader(false);
            }
        });
    })

    return (
        <div className={`app_header ${show && "header_back"}`}>
            <div className="header_container">
                <div className="logo">
                    Flexinema
                </div>
                <div className="nav_menu">
                    <SearchBox />
                </div>
            </div>
        </div>
    )
}

export default Header
