import '../CSS/Skills.css'

import { Link } from 'react-router-dom' /*Allows us to make clickable page links where we can automatically specify the URL. So instead of having to manually click the URL and chagne the path, 
the Link will automatically do that for us. So React Router should route and load the correct componenet*/

function Skills() {
    return (
        <div className="SkillsPage">
            This is the skills page
            <Link to='/'>
                <li>Home</li>
            </Link>
        </div>
    )
}

export default Skills