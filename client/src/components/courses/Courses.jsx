import './courses.css'

const Courses = () => {
    const coursesList = [
        {
            id: 1,
            name: "HTML5 Developement"
        },
        {
            id: 2,
            name: "CSS3 Developement"
        },
        {
            id: 3,
            name: "Core JS Developement"
        },
        {
            id: 4,
            name: "ReactJS Developement"
        },
        {
            id: 5,
            name: "VueJS Developement"
        },
        {
            id: 6,
            name: "Angular Developement"
        },
        {
            id: 7,
            name: "PHP Developement"
        },
        {
            id: 8,
            name: "Python Developement"
        },
        {
            id: 9,
            name: "Java Developement"
        },
        {
            id: 10,
            name: "C# Developement"
        },
        {
            id: 11,
            name: ".NET Developement"
        },
        {
            id: 12,
            name: "C++ Developement"
        },
        {
            id: 13,
            name: "Mobile Apps"
        },
        {
            id: 14,
            name: "Dekstop Apps"
        },
        {
            id: 15,
            name: "Games Developement"
        },
        {
            id: 16,
            name: "React Native "
        },
        {
            id: 17,
            name: "Network & Security "
        },
        {
            id: 18,
            name: "Cloud Computing "
        },
        {
            id: 19,
            name: "DSA Mastery "
        },
        {
            id: 20,
            name: "Web Designing "
        },

    ]
    return (
        <div className="courses">
            <div className="banner-01">
                <h1>Our Courses</h1>
            </div>

            <div className="courses-list">

                {
                    coursesList.map((item)=>{
                        return (<div className="course" key={item.id}>
                        <h2>{item.name}</h2>
                        <ul>
                            <li>Full Complete Course</li>
                            <li>Online - Offline Mode</li>
                            <li>Real World Projects</li>
                        </ul>
                        
                        <div className="btn-group">
                            <button>Check Now</button>
                            <button>Join Now</button>
                        </div>
                    </div>)
                    })
                }
                
            </div>
        </div>
    )
}

export default Courses