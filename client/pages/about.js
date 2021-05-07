import React from 'react'
import Head from 'next/head'

import Nav from '../components/navbar'

export default function about() {
  return (
    <>
      <Head><title>Lotenal | Acerca</title></Head>
      <Nav />
      <div className="about">
        <section className="about__blog">
          <h1 className="sectionTitle">Blog</h1>
          <div className="about__blog__entries">
            <div className="about__blog__entries__post">
              <img src="https://www.gob.mx/cms/uploads/article/main_image/108205/highlight_WhatsApp_Image_2021-05-04_at_11.38.33_AM.jpeg" alt="" />
              <span>04 de mayo de 2021</span>
              <h3>Celebra Loteria Nacional con billete conmemorativo del 130 Aniversario</h3>
            </div>

            <div className="about__blog__entries__post">
              <img src="https://www.gob.mx/cms/uploads/article/main_image/108142/cover_WhatsApp_Image_2021-05-03_at_1.22.05_PM.jpeg" alt="" />
              <span>03 de mayo de 2021</span>
              <h3>Premia Lotería Nacional a ganadores del concurso de dibujo infantil</h3>
            </div>

            <div className="about__blog__entries__post">
              <img src="https://www.gob.mx/cms/uploads/article/main_image/108017/cover_Melate_retro_19_abril-03.jpg" alt="" />
              <span>30 de abril de 2021</span>
              <h3>Premia Lotería Nacional a ganadores del concurso de dibujo infantil</h3>
            </div>

            <div className="about__blog__entries__post">
              <img src="https://www.gob.mx/cms/uploads/article/main_image/107681/cover_Billete_develaci_nLosTorilesNayarit.jpeg" alt="" />
              <span>26 de abril de 2021</span>
              <h3>Se comparte el patrimonio nayarita de Los Toriles en la develación del billete de lotería</h3>
            </div>
          </div>
        </section>

        <section className="about__us">
          <h1 className="sectionTitle">¿Qué hacemos?</h1>
          <div className="about__us__info">
            <p>La Lotería Nacional para la Asistencia Pública es un organismo descentralizado de la Administración Pública Federal, encargado de la celebración de sorteos con premios en efectivo, destinados a captar dinero para apoyar económicamente al Titular del Poder Ejecutivo en los asuntos orientados a procurar la igualdad entre aquellos mexicanos sin posibilidad de satisfacer por sí mismos sus más urgentes necesidades. Nuestra visión es constituirnos en una institución líder y ejemplo a nivel nacional e internacional, reposicionando la imagen ante la opinión pública mediante el incremento de los niveles de credibilidad y confianza.</p>

            <ul>
              <h3>Enlaces externos</h3>
              <li><a href="">Portal de Obligaciones de Transparencia</a></li>
              <li><a href="">Infomex</a></li>
              <li><a href="">Portal Anticorrupción</a></li>
              <li><a href="">Sitio comercial de Lotería Nacional</a></li>
            </ul>

            <div className="about__us__info__social">
              <h3>Síguenos</h3>

              <a href="">Facebook</a>
              <a href="">Instagram</a>
              <a href="">Twitter</a>
              <a href="">YouTube</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
