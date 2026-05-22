import './Stats.css'

import {
  FiFileText,
  FiUsers,
  FiStar,
} from 'react-icons/fi'

import { motion } from 'framer-motion'

function Stats() {
  return (
    <section className='stats'>

      <div className='container'>

       <motion.div
  className='stats-header'
  initial={{
    opacity: 0,
    y: 80,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.9,
    ease: 'easeOut',
  }}
>

          <span className='stats-badge'>
            Credibilidade e Resultados
          </span>

          <h2>
            Resultados que
            <span className='stats-title-highlight'>
              comprovam </span>
            nossa experiência.
          </h2>

          <p>
            Cada projeto entregue representa compromisso,
            precisão técnica e confiança construída através
            de resultados sólidos.
          </p>

       </motion.div>

      <motion.div
  className='stats-grid'
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }}
>

       <motion.div
  className='stats-card'
  variants={{
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
>

            <div className='stats-icon'>
              <FiFileText />
            </div>

            <h3>+180</h3>

            <span>Laudos Emitidos</span>

       </motion.div>

          <motion.div
  className='stats-card'
  variants={{
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
>

            <div className='stats-icon'>
              <FiUsers />
            </div>

            <h3>+280</h3>

            <span>Clientes Atendidos</span>

      </motion.div>

         <motion.div
  className='stats-card'
  variants={{
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
>

            <div className='stats-icon'>
              <FiStar />
            </div>

            <h3>95%</h3>

            <span>Satisfação dos Clientes</span>

       </motion.div>

      </motion.div>

      </div>

    </section>
  )
}

export default Stats