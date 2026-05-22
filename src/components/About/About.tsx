import './About.css'

import aboutImage from '../../assets/images/hero-bg.jpg'

import {
  FiCheckCircle,
} from 'react-icons/fi'

import { motion } from 'framer-motion'

function About() {
  return (
    <section className='about'>

      <div className='container about-container'>

       <motion.div
  className='about-content'
  initial={{
    opacity: 0,
    x: -80,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.9,
    ease: 'easeOut',
  }}
>

          <span className='about-badge'>
            Por que escolher?
          </span>

          <h2>
            Engenharia com
            <span className='about-title-highlight'>
              precisão,
            </span>
            estratégia e confiança.
          </h2>

          <p>
            Soluções técnicas desenvolvidas com foco em
            segurança, conformidade e resultados reais
            para patrimônios, obras e processos periciais.
          </p>

          <div className='about-list'>

            <div className='about-item'>
              <FiCheckCircle />

              <span>
                <strong>20 anos de experiência</strong>
                em obras, perícias e gestão técnica.
              </span>
            </div>

            <div className='about-item'>
              <FiCheckCircle />

              <span>
                <strong>Visão estratégica</strong>
                para controle técnico e financeiro.
              </span>
            </div>

            <div className='about-item'>
              <FiCheckCircle />

              <span>
                <strong>Precisão documental</strong>
                com foco em conformidade legal.
              </span>
            </div>

            <div className='about-item'>
              <FiCheckCircle />

              <span>
                <strong>Atendimento especializado</strong>
                para soluções rápidas e seguras.
              </span>
            </div>

          </div>

       </motion.div>


      <motion.div
  className='about-image'
  initial={{
    opacity: 0,
    x: 80,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1,
    ease: 'easeOut',
  }}
>
          <img src={aboutImage} alt='' />
      </motion.div>

      </div>

    </section>
  )
}

export default About