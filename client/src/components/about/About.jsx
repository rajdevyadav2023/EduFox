import './about.css'
import img1 from '../../img/img-07.png'
import img3 from '../../img/img-11.png'
import img4 from '../../img/img-12.png'
const About = () => {
    return (
        <div className='about'>
            <div className="banner-01">
                <h1>About Us</h1>
            </div>

            <div className="about-features">

<div className="about-feature-text">
    <h2>Your Career Matters To Us</h2>
    <p>All of our students are entitled to a perk: affiliate consulting, professional services, and placement services.
        The follow-up meetings with each student individually, free of charge, are conducted by our trainers, who are also skilled IT consultants and professionals. These meeting sessions are nothing but our learning and training strategies to secure a candidate placement.</p>

    <p>We have developed strong relationships with several IT firms and are interacting with more new and renowned ones that are creating sizable ERP, E-Commerce, and QA programmes, and we are on their preferred vendor list. Our corporate partners are aggressively recruiting our students.
    </p>

</div>

<div className="about-feature-img">
    <img src={img3} className='hide-in-small' alt="about feature " />
</div>
</div>

            <div className="about-features">
                <div className="about-feature-img">
                    <img src={img1} alt="about feature " />
                </div>
                <div className="about-feature-text">
                    <h2>What EduFox Does ?</h2>
                    <p>EduFox is a Registered IT Training Institute . We train students from both local and PAN India in a variety of nationally recognised professional IT courses.
                        With our streamlined and adaptable course delivery model, we ensure that you thoroughly grasp the information and develop useful skills in your selected course.
                    </p>
                    <p>When you enrol with us, you will be joining hundreds of other job searchers and IT professionals who got employment or promotion after completion of training from us.
                        We offer a customised approach in training to elevate and build your IT skills which makes you stand out from the crowd.</p>
                </div>
            </div>

            <div className="about-features">

                <div className="about-feature-text">
                    <h2>Your Career Matters To Us</h2>
                    <p>All of our students are entitled to a perk: affiliate consulting, professional services, and placement services.
                        The follow-up meetings with each student individually, free of charge, are conducted by our trainers, who are also skilled IT consultants and professionals. These meeting sessions are nothing but our learning and training strategies to secure a candidate placement.</p>

                    <p>We have developed strong relationships with several IT firms and are interacting with more new and renowned ones that are creating sizable ERP, E-Commerce, and QA programmes, and we are on their preferred vendor list. Our corporate partners are aggressively recruiting our students.
                    </p>

                </div>

                <div className="about-feature-img">
                    <img src={img4} alt="about feature " />
                </div>
            </div>










        </div>
    )
}

export default About