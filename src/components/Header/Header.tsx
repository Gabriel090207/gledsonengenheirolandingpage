import './Header.css'

import { useState } from 'react'

import { FaWhatsapp } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='header'>
      <div className='container header-container'>

        <a href='/' className='header-logo'>
          Gledson <span>Engenharia</span>
        </a>

        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>

          <div className='header-mobile-top'>

  <button
    className='header-close-button'
    onClick={() => setMenuOpen(false)}
    aria-label='Fechar menu'
  >
    <FiX />
  </button>

</div>

          <a onClick={() => setMenuOpen(false)} href='#'>Início</a>
          <a onClick={() => setMenuOpen(false)} href='#'>Serviços</a>
          <a onClick={() => setMenuOpen(false)} href='#'>Sobre</a>
          <a onClick={() => setMenuOpen(false)} href='#'>Contato</a>

          <a
            href='https://wa.me/5500000000000'
            target='_blank'
            rel='noreferrer'
            className='header-mobile-button'
          >
            <FaWhatsapp />
            Falar no WhatsApp
          </a>
        </nav>

        <a
          href='https://wa.me/5500000000000'
          target='_blank'
          rel='noreferrer'
          className='header-button'
        >
          <FaWhatsapp />
          Falar no WhatsApp
        </a>

        <button
          className='header-menu-button'
          onClick={() => setMenuOpen(true)}
          aria-label='Abrir menu'
        >
          <FiMenu />
        </button>

      </div>
    </header>
  )
}

export default Header