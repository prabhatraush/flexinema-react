import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="app_footer">
           <div className="footer_container">
               <div className="footer_left">
                    <div className="logo">
                        <Link to="/"><img src="logo-flexinema.png"/></Link>
                    </div>
               </div>
               <div class="footer_right">
                   <h2>Get In Touch </h2>
                   <div className="social_touch">
                    <span><a href="https://github.com/prabhatraush"><i class="fab fa-github-square"></i></a> </span>
                    <span><a href="https://www.facebook.com/prabhat.raushan/"><i class="fab fa-facebook-square"></i></a> </span>
                    <span><a href="https://www.instagram.com/raushanprabhat/"><i class="fab fa-instagram"></i></a> </span>
                    <span><a href="mailto:prabhatraush@gmail.com"><i class="far fa-envelope"></i></a> </span>
                   </div>
               </div>
           </div>
           <div className="copyright">
                © 2020 prabhatraushan
           </div>
        </div>
    )
}

export default Footer
