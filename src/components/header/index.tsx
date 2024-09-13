import { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import Instagram from '../../assets/instagram.png'
import WhatsApp from '../../assets/whatsApp.png'
import './index.css'
import { route } from './menuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import useWindowWidth from '../../utils/responsive'

export default function Header() {
  const windowWidth = useWindowWidth()
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [displayWidth, setDisplayWidth] = useState<boolean>(false)

  useEffect(() => {
    if (windowWidth < 769) {
      setDisplayWidth(false)
    } else {
      setDisplayWidth(true)
    }
    setMenuOpen(false)
  }, [windowWidth])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <header className="header">
      <div className="header-container">
        {!isMenuOpen && <img src={Logo} alt="Logo" className="logo" />}
        <div className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {isMenuOpen && (
            <button className="menu-respons" onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={faXmark}
                className="menu-respons"
                size="2x"
                color="rgb(34, 139, 230)"
              />
            </button>
          )}
          <div className="icon-menu-resp">
            {isMenuOpen && (
              <img src={Logo} alt="Logo" className="logo-MenuOpen" />
            )}
          </div>
          {route.map((r, index) => (
            <span className="route" key={index}>
              {r}
            </span>
          ))}
        </div>
        {displayWidth && (
          <div className="redeSocial">
            <a href="https://www.instagram.com/ceicentroeletrico?igsh=MXB4Y2FsNzVoemFqOA==">
              <img src={Instagram} alt="Logo" className="redeSocial" />
            </a>
            <a>
              <img src={WhatsApp} alt="Logo" className="redeSocial" />
            </a>
          </div>
        )}
        {!isMenuOpen && (
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              color="rgb(34, 139, 230)"
            />
          </button>
        )}
      </div>
    </header>
  )
}
