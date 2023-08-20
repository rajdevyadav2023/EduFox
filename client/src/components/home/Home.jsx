
import './home.css'
import img1 from '../../img/img-02.png'
import img2 from '../../img/img-04.png'
import img3 from '../../img/img-06.png'
const Home = () => {
  return (
    <div className='home'>
      <div className="banner-01">
        <div className="search-box">
          <h1>Find The Best IT Course & Kick Start Your Career</h1>
          <input type="text" placeholder='Search Your IT Courses For Beginning' />
          <button>Search</button>
        </div>
      </div>

      <div className="features">
        <div className="feature-img">
          <img src={img2} alt="feature" />
        </div>
        <div className="feature-text">
          <h2>Job - Oriented Skills</h2>
          <p>We are thriving to establish ourselves as an education provider that focuses on giving you job-oriented skills. We understand what the monthly paycheck will make you and your family feel.</p>
        </div>
      </div>

      <div className="features">

        <div className="feature-text">
          <h2>Our Mission</h2>
          <p>Back in 2000, keeping in mind to train and educate youngsters, we started our journey. When we started <strong>EduFox</strong> IT Institute, our passion was and is to train youngsters in job-oriented subdomains in the IT industry to secure a career by offering you the best IT Training. </p>
          <p>We are here to guide you to reach the pinnacle of your career. We are aware of the fact that getting a job is the prime motive of students after course completion, here at  <strong>EduFox</strong> we provide 100% Job assistance.</p>
          <p>Our IT Institute has 6 branches at Delhi NCR, with more than 180 courses and skill sets. Our Institute is helping youngsters to be trained in job-oriented courses and improve their career.</p>
        </div>

        <div className="feature-img">
          <img src={img1} alt="feature" />
        </div>
      </div>

      <div className="features">
      <div className="feature-img">
          <img src={img3} alt="feature" className='hide-in-small' />
        </div>

        <div className="feature-text">
         <h2>Our Trainers and Quality</h2>
            <p>We have highly qualified trainers and educators specialising in the IT industry. Top IT professionals will educate you with deep knowledge of the course and as per current IT industry needs.
                </p>
                <p>Our education strategy is primarily based on Industry requirements. To make sure you are educated on the most recent industry standards, we are very responsive to the variable needs of the IT Industry.</p>
        </div>

       
      </div>
    </div>
  )
}

export default Home