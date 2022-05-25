import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { IoMdMusicalNote } from "react-icons/io"
import AOS from 'aos';
import 'aos/dist/aos.css';



import Logo from '../Images/K2.png'

const NavBar = (props) => {

    AOS.init();
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const cancelMusic=()=>{
        props.setPlaying(false);
    }


    return (
        <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1c1b20] text-white z-50'>
            <div>
                <Link to="Home" smooth={true} duration={1000}>
                    <img src={Logo} alt="Logo Image" style={{ width: '50px' }} className='hover:cursor-pointer hover:scale-105 duration-300' />
                </Link>

            </div>
            <div>
                <ul className='hidden md:flex'>
                    <li className='hover:scale-105 duration-300'>
                        <Link to="Home" smooth={true} duration={2200}>
                            Home
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300'>
                        <Link to="About" smooth={true} duration={2200}>
                            About
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300'>
                        <Link to="Skills" smooth={true} duration={2200}>
                            Skills
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300'>
                        <Link to="Projects" smooth={true} duration={2200}>
                            Project
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300'>
                        <Link to="Interests" smooth={true} duration={2200}>
                            Interests
                        </Link>
                    </li>
                    <li className='hover:scale-105 duration-300'>
                        <Link to="Contact" smooth={true} duration={2200}>
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>

            
            <div className={props.playing ? 'text-black border-4 border-[#F68989] fixed sm:right-12 right-5 top-[90%]  rounded-full bg-white animate-better-Bounce hover:cursor-pointer hover:text-white hover:bg-black hover:border-[#C65D7B] duration-200'  : 'hidden'} onClick={cancelMusic}><IoMdMusicalNote size={40}/></div>

           
           

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1c1b20] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:scale-105 duration-300'>
                    <Link onClick={handleClick} to="Home" smooth={true} duration={1000}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-105 duration-300'>
                    <Link onClick={handleClick} to="About" smooth={true} duration={1000}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-105 duration-300'>
                    <Link onClick={handleClick} to="Skills" smooth={true} duration={1000}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-105 duration-300'>
                    <Link onClick={handleClick} to="Projects" smooth={true} duration={1000}>
                        Project
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-105 duration-300'>
                    <Link onClick={handleClick} to="Interests" smooth={true} duration={1000}>
                        Interests
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:scale-105 duration-300'>
                    <Link onClick={handleClick} to="Contact" smooth={true} duration={1000}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li className='w-[160px] flex justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e76a8] px-1 py-1 rounded-sm'
                            href='https://www.linkedin.com/in/nguyen-khang/' target="blank" >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] flex justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] px-1 py-1 rounded-sm'
                            href='https://github.com/khang630' target="blank">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] flex justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#874356] px-1 py-1 rounded-sm'
                            href='/'>
                            <Link to="Contact" smooth={true} duration={1000} className='flex items-center justify-center'>
                                Email <HiOutlineMail className='ml-7' size={30} />
                            </Link>
                        </a>

                    </li>
                    <li className='w-[160px]  flex justify-between items-center'>
                        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C65D7B] px-1 py-1 rounded-sm'
                            href={require('../Downloads/Resume.pdf')} download={"Khang Nguyen Resume"}>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default NavBar

/* const[nav, setNav] = useState(false)
nav: our state variable. It is a boolean intially set to false
setNav: our function that will change our state variale. 
*/

/* const handleClick = () => setNav(!nav)
Arrow function which is the same as

handleClick{
    return setNav(!nav)
}

When an arrow function has no paramters, we put an empty (). 
This function returns !nav which is true to the setNav function. This will change our useState value nav to be true.
*/

/* TAILWIND CSS Nav Bar
fixed: whenever we scroll, that elemnent will stay in place. So our navbar will always stay at the top
w-full: we set that element's width to 100%
h-[# of pixels]: sets the height of that element. We could also do 'h-#' which will specify the height in rems. Or we could do pixels, em, etc.
flex: I guess makes the element stretch?
justify-between: the space between the list items in our nav bar
items-center: centers the items
px-4: padding on the x axis. Value of 4 = 1 rem
bg-[]: We can add our custom hex code color in the bracket.
*/

/* General explanation for the 3 things
The <ul> is our navbar buttons/links
The <FaBars/> is our hamburger menu or the 3 lines thingy
The 2nd <ul> is our mobile menu
*/

/* TAILWIND 1st <ul> navbar list items
flex: makes the <ul> items side by side as opposed to stacked on top of each other
hidden: means that the element is hidden and treated as if its removed
md: : putting anything after md: means that after a width of md or 780px is achieved, show or do what is put after md:. So md:flex means that if there is >780px, then flex those elements.
hidden md:flex: means that the element will only be shown if there is greater than medium space. So it is hidden until md; is satisfied. When md: is satisfied, it will show the <ul> and flex. So if you are on mobile, the width of the screen is not > 780px so the menu doesn't show
md:hidden : means that if the screen is >780px, apply hidden to that element.
*/

/* TAILWIND burger menu
md:hidden : means that if there is a width > than md or >780px, hide the burger menu.
z-10: if we are in mobile, idk why but the hamburger menu won't show. So we have to give it position z-10 for it to show.

onClick: When you click on the hamburger menu, it calls the handleCLick function
if-else: if the hamburger is clicked, show an x (FaTimes). Else show hamburger button
*/

/* TAILWIND mobile menu
absolute: causes an element to be removed from the document flow. HTML/React will treat an element with absolute positioning as if it wasn't there.
top-0 and left-0: this is a Tailwind thing where we cause the element to be in the upper left corner.
w-full: we set that element's width to 100%
h-screen: makes the element have the entire height of whatever screen size you have
bg-[]: We can add our custom hex code color in the bracket.
flex: causes our items to be horiontal. Idk if we need this since we used flex-col below.
flex-col: use flex col to position flex items vertically on top of one another. This gives us our stack of menu items
justify-center: justifies the element to be VERTICALLY in the center.
items-center: justifies the element to be HORIZONTALLY in the center.

if-else: A shorthand if else statement is "condition ? true_condition : false_condition"

-- Li items
py-6: pad y axis 1.5rem
text-4xl: set font size and line height by 2.5rem
*/

/* TAILWIND icons
ml-[#px]: means margin left. Basically acts as left padding. If you put a positive #, the element will get pushed to the right since you are padding the left side. Vice versa for a negative value.
hover: after hovering over that element, do what is put after. In this case once we hover over the icon, we shift the icon to the right to reveal the word
duration: the duration of the animation. Also makes it more smooth since its not instant animation. Number represents millisceonds.
*/