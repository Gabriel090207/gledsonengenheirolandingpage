import './Differentials.css'

import {
  FiShield,
  FiTarget,
  FiCheckCircle,
} from 'react-icons/fi'


import { motion } from 'framer-motion'

function Differentials() {
  return (
    <section className='differentials'>

      <div className='container'>

      <motion.div
  className='differentials-grid'
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true }}
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
  className='differentials-card'
  variants={{
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
>

            <div className='differentials-icon'>
              <FiShield />
            </div>

            <h3>
              Autoridade Técnica
              e Acadêmica
            </h3>

            <p>
              Atuação técnica especializada em laudos,
              perícias e inspeções prediais com foco
              em segurança, conformidade e excelência.
            </p>

          </motion.div>

         <motion.div
  className='differentials-card'
  variants={{
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
>

            <div className='differentials-icon'>
              <FiTarget />
            </div>

            <h3>
              Planejamento
              e Eficiência
            </h3>

            <p>
              Soluções inteligentes para otimizar custos,
              reduzir burocracias e garantir processos
              rápidos e eficientes.
            </p>

        </motion.div>

         <motion.div
  className='differentials-card'
  variants={{
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }}
  transition={{
    duration: 0.8,
    ease: 'easeOut',
  }}
>

            <div className='differentials-icon'>
              <FiCheckCircle />
            </div>

            <h3>
              Segurança Jurídica
              e Pericial
            </h3>

            <p>
              Laudos e pareceres elaborados com precisão
              técnica para oferecer respaldo jurídico,
              confiabilidade e tranquilidade.
            </p>

       </motion.div>

       </motion.div>

      </div>

    </section>
  )
}

export default Differentials