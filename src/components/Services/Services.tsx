import './Services.css'

import service01 from '../../assets/images/hero-bg.jpg'
import service02 from '../../assets/images/hero-bg.jpg'
import service03 from '../../assets/images/hero-bg.jpg'
import service04 from '../../assets/images/hero-bg.jpg'

import { FaWhatsapp } from 'react-icons/fa'

import { motion } from 'framer-motion'

function Services() {
  return (
    <section className='services'>

      <div className='container'>

        <div className='services-header'>

            <span className='services-badge'>
    Nossos Serviços
  </span>

  <h2>
    Soluções Técnicas
    para <span className='services-title-highlight'>Engenharia </span>
    e Perícias
  </h2>

          <p>
            Atuamos com excelência técnica em avaliações,
            laudos, perícias e inspeções prediais para
            garantir segurança, conformidade e precisão.
          </p>

        </div>

        <motion.div
  className='services-grid'
  initial='hidden'
  whileInView='visible'
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>

         <motion.article
  className='services-card'
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

            <div className='services-image'>
              <img src={service01} alt='' />
            </div>

            <div className='services-content'>

              <h3>Laudos Técnicos</h3>

              <p>
                Documentações técnicas completas para
                regularizações, inspeções e análises
                especializadas.
              </p>

              <a
                href='https://wa.me/5500000000000'
                target='_blank'
                rel='noreferrer'
              >
                <FaWhatsapp />
                Solicitar Orçamento
              </a>

            </div>

          </motion.article>

       <motion.article
  className='services-card'
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

            <div className='services-image'>
              <img src={service02} alt='' />
            </div>

            <div className='services-content'>

              <h3>Diagnóstico e Vistorias</h3>

              <p>
                Avaliações técnicas detalhadas para identificar
                patologias, falhas estruturais e riscos.
              </p>

              <a
                href='https://wa.me/5500000000000'
                target='_blank'
                rel='noreferrer'
              >
                <FaWhatsapp />
                Solicitar Orçamento
              </a>

            </div>

       </motion.article>

      <motion.article
  className='services-card'
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

            <div className='services-image'>
              <img src={service03} alt='' />
            </div>

            <div className='services-content'>

              <h3>Perícias Judiciais</h3>

              <p>
                Assistência técnica especializada para
                processos judiciais e análises periciais.
              </p>

              <a
                href='https://wa.me/5500000000000'
                target='_blank'
                rel='noreferrer'
              >
                <FaWhatsapp />
                Solicitar Orçamento
              </a>

            </div>

         </motion.article>
         
         <motion.article
  className='services-card'
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

            <div className='services-image'>
              <img src={service04} alt='' />
            </div>

            <div className='services-content'>

              <h3>Avaliação de Imóveis</h3>

              <p>
                Determinação técnica do valor imobiliário
                com metodologia precisa e segura.
              </p>

              <a
                href='https://wa.me/5500000000000'
                target='_blank'
                rel='noreferrer'
              >
                <FaWhatsapp />
                Solicitar Orçamento
              </a>

            </div>

       </motion.article>

  </motion.div>

      </div>

    </section>
  )
}

export default Services