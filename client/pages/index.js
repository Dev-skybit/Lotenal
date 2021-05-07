// React and Next imports
import React, { useEffect, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Local components imports
import Navbar from '../components/navbar'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/ticket')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function index({ data }) {
  const results = data

  return (
    <div>
      <Head> <title>Lotería Nacional | Inicio</title> </Head>
      <Navbar />

      <header className="header">
        <h1 className="header__title">Loteria Nacional de México</h1>

        <div className="header__info">
          <div className="header__info__awards">
            <h3>Premio Mayor</h3>
            <h1>$27, 000, 000 </h1>
          </div>

          <div className="header__info__winner">
            <h3>Gana hasta</h3>
            <h1>$3, 125, 000</h1>
          </div>

          <div className="header__info__tickets">
            <span>
              <h3></h3>
              <a href="#shop" className="header__info__tickets__btn">Comprar</a>
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="shop" id="shop">
          <h1 className="sectionTitle">Disponibles esta semana</h1>

          <div className="shop__tickets">
            {
              results.map(result => {
                const { id, price, title, desc } = result

                return (
                  <Link href={`/tickets/${id}`} key={id}>
                    <div className="shop__tickets__ticket">
                      <h3>{title} <span>${price}.00</span> </h3>
                      <p>{desc}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </section>

        <section className="ticket" id="ticket">
          <h1 className="sectionTitle">Comprueba tus cachitos</h1>

          <form className="ticket__form">
            <label>
              <p>Fecha del Sorteo </p>
              <input type="date" name="" id="" />
            </label>

            <label>
              <p>Ingresa tu número de billete</p>
              <input type="number" name="" id="" />
            </label>

            <button className="ticket__form__btn">Buscar</button>
          </form>
        </section>
      </main>
    </div>
  )
}