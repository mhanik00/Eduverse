
import { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/images/menu-icon.png'

const Navbar = () => {
    const [sticky,setSticky]=useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    },[])
    const [mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu= ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
   <nav className={`container ${sticky ?'dark-nav' : ''}`}>
  <h1>Eduverse</h1>
    <ul className={mobileMenu ?'':'hide-mobile-menu' }>
        <li>
        <Link
        to='hero'
        smooth={true}
        offset={0}
        duration={500}
        >
        Home  
        </Link>
       </li>
        <li>
        <Link
        to='program'
        smooth={true}
        offset={-260}
        duration={500}
        >
       Programs
        </Link></li>
        <li>
        <Link
        to='about'
        smooth={true}
        offset={-150}
        duration={500}
        >
        About us
        </Link>
       </li>
        <li>
        <Link
        to='campus'
        smooth={true}
        offset={-260}
        duration={500}
        >
         Campus
        </Link>
       </li>
        <li>
        <Link
        to='testimonials'
        smooth={true}
        offset={-260}
        duration={500}
        >
      Testimonials
        </Link></li>
        <li><Link 
        to='contact'
        smooth={true}
        offset={-260}
        duration={500}
        className='btn'>
        Contact us
        </Link></li>
      
    </ul>
    <img
    onClick={toggleMenu}
     src={menu_icon} alt='menu-icon' className='menu-icon'/>
   </nav>
  )
}

export default Navbar