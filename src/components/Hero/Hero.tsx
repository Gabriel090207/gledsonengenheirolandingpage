import './Hero.css'

import heroBg from '../../assets/images/hero-bg.jpg'

import {
  FaWhatsapp,
  FaClipboardCheck,
  FaBuilding,
} from 'react-icons/fa'

import {
  FiSearch,
  FiCheckCircle,
} from 'react-icons/fi'


import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      className='hero'
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className='hero-overlay'></div>

      <div className='container hero-container'>

        <motion.div
  className='hero-content'
  initial={{
    opacity: 0,
    y: 80,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    ease: 'easeOut',
  }}
>

          <span className='hero-badge'>
            Engenharia Civil • Laudos • Perícias
          </span>

          <h1>
            Precisa de um Engenheiro
            que resolve em
            <span> Brasília, Goiânia e Região?</span>
          </h1>

          <p>
            Soluções técnicas rápidas e seguras para laudos,
            perícias, avaliações imobiliárias e inspeções prediais.
          </p>

          <div className='hero-services'>

            <div className='hero-service-item'>
              <FaClipboardCheck />
              <span>Laudos Técnicos</span>
            </div>

            <div className='hero-service-item'>
              <FiSearch />
              <span>Perícias Judiciais</span>
            </div>

            <div className='hero-service-item'>
              <FaBuilding />
              <span>Avaliação de Imóveis</span>
            </div>

            <div className='hero-service-item'>
              <FiCheckCircle />
              <span>Consultoria Especializada</span>
            </div>

          </div>

          <a
            href='https://wa.me/5500000000000'
            target='_blank'
            rel='noreferrer'
            className='hero-button'
          >
            <FaWhatsapp />
            Solicitar Orçamento
          </a>

               </motion.div>

      </div>
    </section>
  )
}

export default Hero