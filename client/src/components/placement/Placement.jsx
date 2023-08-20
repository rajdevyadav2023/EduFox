import './placement.css'

const Placement = () => {
    const companies = [
        {
            name: "AppsThink Solution",
            location: "H No. 868, Gurgaon Sector 10"
        },
        {
            name: "Best Choice Solutions",
            location: "Noida Sector 63"
        },
        {
            name: "Profit Technologies",
            location: "Faridabad NIT"
        },
        {
            name: "101 Creation",
            location: "Gurgaon Sector 10"
        },
        {
            name: "Digital Monster",
            location: "Gaur City Cetre"
        },
        {
            name: "Sifara InfoTech",
            location: "Film City Noida, Sector 16"
        },
        {
            name: "Web Solutions",
            location: "Hari Nagar Ashram"
        },
        {
            name: "ETS Networks",
            location: "Noida Sector 58"
        },
        {
            name: "Kickr Technology",
            location: "B Tower, Noida Sector 62"
        },
        {
            name: "Mariox Software",
            location: "Noida Sector 135"
        },
        {
            name: "Marg Info",
            location: "Laxmi Nagar"
        },
        {
            name: "Web Mok",
            location: "Rohtak Model Town"
        },
        {
            name: "Media Tech Temple",
            location: "Bharatpur"
        },
        {
            name: "Appzeto",
            location: "Indore, Vijay Nagar"
        },
        {
            name: "CosmosSoft",
            location: "Hazari Bagh, Barkatha"
        },
        
    ]
    return (
        <div className='placement'>
            <div className="banner-01">
                <h1>Placement Point</h1>
            </div>

            <div className="companies-list">
                {
                    companies.map((comp, index) => {
                        return (
                            <div className="company" key={index}>
                            <h2>{comp.name}</h2>
                            <small><i className="fa-solid fa-location-dot"></i> {comp.location}</small>
                            <ul>
                                <li><i className="fa-solid fa-circle-check"></i> Govt Verified</li>
                                <li><i className="fa-solid fa-circle-check"></i>  Best Environment</li>
                                <li><i className="fa-solid fa-circle-check"></i> Well Management</li>
                            </ul>
                            <div className="btn-group">
                                <button>Enquiry Now</button>
                                <button>More Details</button>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Placement