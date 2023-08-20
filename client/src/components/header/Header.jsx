import { NavLink } from "react-router-dom"
import './header.css'
import './header.resp.css'
import { useState } from "react"
const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="header">
            <div className="header-links">
                <div className="social-links">
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-linkedin"></i></span>
                    <span><i className="fa-brands fa-youtube"></i></span>
                    <span><i className="fa-brands fa-telegram"></i></span>
                </div>
                <div className="contact-methods">
                    <p><i className="fa-brands fa-whatsapp"></i> +91 0123 456 789</p>
                    <p><i className="fa-solid fa-phone"></i> +91 000 111 2222</p>
                    <p><i className="fa-solid fa-envelope"></i> info@edufox.com</p>
                </div>
            </div>
            <nav>
                <div className="logo-bx">
                    <h1> <span className="fn">Edu</span><span className="ln">Fox</span></h1>
                </div>
                <ul id="large-screen-nav">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/courses'}>Courses</NavLink></li>
                    <li><NavLink to={'/placement'}>Placement</NavLink></li>
                    
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    
                    <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                </ul>

                <div id="small-screen-nav">
                    <button onClick={()=>{setShow("true")}}><i className="fa-solid fa-bars"></i></button>
                    <ul id="small-navbar" style={{display: show?"block":"none"}}>
                        <button onClick={()=>{setShow(!show)}}><i className="fa-solid fa-xmark"></i></button>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/courses'}>Courses</NavLink></li>
                    <li><NavLink to={'/placement'}>Placement</NavLink></li>
                  
                    <li><NavLink to={'/about'}>About</NavLink></li>
                   
                    <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header