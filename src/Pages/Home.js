import '../CSS/Home.css'

import { Link } from 'react-router-dom' /*Allows us to make clickable page links where we can automatically specify the URL. So instead of having to manually click the URL and chagne the path, 
the Link will automatically do that for us. So React Router should route and load the correct componenet*/

function Home() {
    return (
        <div className="HomePage">


            <Link to='/Skills' className='SkillsLink'>
                <li>Skills</li>
            </Link>

            <Link to='/Interests' className='InterestsLink'>
                <li>Interests</li>
            </Link>
            <div className='Name'>Khang Nguyen</div>
            <Link to='/Projects' className='ProjectsLink'>
                <li>Projects</li>
            </Link>
            <div className='About'>
                <p style={{fontSize: 20}}>Hi, I'm Khang Nguyen and I am a recent University Graduate.</p>
                <p>I am currently looking for work and am open to any opportunities to develop and start my career!</p>
                <p>I aspire to become either a Software Engineer, Data Engineer, UI/UX Designer, or Full-Stack Developer.</p>
                <p>Aside from what I listed above, I am also open to consider other positions.</p>
                <p>Otherwise, Thank You for visiting my portfolio and feel free to look around!</p>
            </div>

            <Link to='/Education' className='EducationLink'>
                <li>Education</li>
            </Link>

        </div>
    )
}

export default Home