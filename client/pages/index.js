// React and Next imports
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import axios from 'axios'

// Local components imports
import Navbar from '../components/navbar'

export default function index(props) {
  const [listOfTickets, setListOfTickets] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/ticket").then((resp) => {
      setListOfTickets(resp.data)
    })
  }, [])

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
              listOfTickets.map((value, key) => {
                return (
                  <Link href={`/tickets/byId/${value.id}`}>
                    <div className="shop__tickets__ticket">
                      <h3>{value.title} <span>${value.price}.00</span> </h3>
                      <p>{value.desc}</p>
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
    </div >
  )
}