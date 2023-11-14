import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouseChimneyCrack, faFolder, faComment, faFireBurner, faPersonHiking } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from "prop-types"


//// ******* ////
const menuItems = [
  {
    name: 'Home',
    icon: faHouseChimneyCrack,
    link: '#hero',
    path: 'a',
  },
  {
    name: 'Last Projects',
    icon: faFireBurner,
    link: '#projects',
    path: 'a',
  },
  {
    name: 'All Projects',
    icon: faFolder,
    link: '/projects',
    path: 'link',
  },
  {
    name: 'About me',
    icon: faPersonHiking ,
    link: '#about',
    path: 'a',
  },
  {
    name: 'Contact',
    icon: faComment,
    link: '#contact',
    path: 'a',
  },
]
const MenuItems = ( {name, icon, link, path} ) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleHoverOn = () => {
    setIsHovered(true)
  }
  const handleHoverOff = () => {
    setIsHovered(false)
  }
  const handleAnchor = () => {
    navigate('/')
  }

  const renderMenuItemLink = () => {
    const isActive = location.pathname === link || window.location.hash === link
    const activeClass = isActive ? 'active' : '';
    if (path == 'link') {
      return (
        <Link to={link}
          className={activeClass}
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
        >
          <FontAwesomeIcon icon={icon} />
        </Link>
      )
    }
    else {
      return (
        <a href={link}
          className={activeClass}
          onClick={handleAnchor}
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      )
    }
  }
  return (
    <>
      <li>
        {renderMenuItemLink()}
      </li>
    
      <AnimatePresence>
        {isHovered &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='header__nav__hoverInfo'
          >
            <p>{name}</p>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )

}
MenuItems.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}
//// ******* ////



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const renderMenu = () => {
      return (
            <i className={'header__nav__icon'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FontAwesomeIcon icon={faBars} size='2x'/>
            </i>
      )
  }
  const renderMenuBar = () => {
    return (
      <AnimatePresence>
        {isMenuOpen && 
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {menuItems.map((item, index) => {
              const { name, icon, link, path } = item
              return (
                <MenuItems key={index} name={name} icon={icon} link={link} path={path} />
              )
            }
            )}
          </motion.ul>
        }
      </AnimatePresence>
    )
  }  

  return (
    <header className='header'>
        <nav className='header__nav'>
        {renderMenu()}
        {renderMenuBar()}
      </nav>
    </header>
  )
}

export default Header