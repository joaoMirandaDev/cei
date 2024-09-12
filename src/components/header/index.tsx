import { useState } from 'react'
import Logo from '../../assets/logo.png'
import './index.css'
import { route } from './menuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

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
