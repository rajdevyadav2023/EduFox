import './contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="banner-01">
                <h1>Contact Us</h1>
            </div>

            <div className="form-container">
                <div className="info-container">
                    <h1>Contact Us</h1>
                    <div className="info-box">
                    <h2><i className="fa-solid fa-envelope"></i>    Email Us</h2>
                    <p>info@educia.com</p>
                    </div>
                    <div className="info-box">
                    <h2><i className="fa-solid fa-phone"></i> Call Us</h2>
                    <p>+91 0123456789</p>
                    </div>
                    <div className="info-box">
                    <h2> <i className="fa-solid fa-location-dot"></i> Our Address</h2>
                    <p>EDUFOX Office No 6, 2nd Floor, C 4, Sector-63, Dwraka, Delhi. 201301</p>
                    </div>
                </div>
                <form >
                    <h2>Contact Form</h2>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' id='name' placeholder='Enter Here' />
                    </div>
                   
                    <div className="form-control">
                        <label htmlFor="phone">Phone No</label>
                        <input type="tel" name='phone' id='phone' placeholder='Enter Here' />
                    </div>

                    <div className="form-control">
                        <label htmlFor="message">Message</label>

                        <textarea name="message" id="message" placeholder='Write Your Message Here'></textarea>
                    </div>

                    <div className="btn-group">
                        <button type='submit'>Submit</button>
                        <button type='reset'>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact