import './footer.css'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
    <div className="ftr-top">
        <div className="ftr-cnt-box">
            <h2>Contact Us</h2>
            <ul className="cntc">
                <li><i className="fa-solid fa-location-dot"></i> EduFox Office No 6, 2nd Floor, C 4, Sector-63, Dwraka, Delhi. 201301</li>
                <li><i className="fa-solid fa-phone"></i> +91 012 3456 789</li>
                <li><i className="fa-solid fa-envelope"></i>  info@edufox.com</li>
            </ul>
        </div>
        <div className="ftr-cnt-box">
            <h2>Important Links</h2>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About Us</NavLink></li>
                <li><NavLink to={'/courses'}>All Courses</NavLink></li>
                <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
                <li><NavLink to={'/'}>Privacy Policy</NavLink></li>
            </ul>
        </div>
        <div className="ftr-cnt-box">
            <h2>Recent Posts</h2>
            <ul>
                <li>Unleash Your Digital Marketing Potential with EduFox Course in Noida</li>
                <li>Unlocking Success with Digital Marketing Training in Noida</li>
                <li>Excel Training Course in Noida Sector 63: Empower Your Skills with EduFox.</li>
            </ul>
        </div>
        <div className="ftr-cnt-box">
            <h2>About EduFox</h2>
            <p>EduFox is a leading professional training institute that provides proficient training and skills to
                professionals who are in search of brighter career pathway but fail to achieve it due to lack of
                proper training and certification.</p>
        </div>
    </div>

    <div className="ftr-bottom">
        <p>© 2023 EduFox By Rajdev Yadav. All Rights Reserved.</p>
    </div>
</footer>
  )
}

export default Footer