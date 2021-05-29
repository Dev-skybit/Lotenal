// React and Next imports
import React, { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AuthContext } from '../../../helpers/AuthContext'
import Link from 'next/link'

// Local components imports
import Navbar from '../../../components/navbar'
import axios from 'axios'

export async function getServerSideProps({ query }) {
  const { id } = query
  const res = await fetch(`http://localhost:3001/ticket/${id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function index({ data }) {
  const { isAuth } = useContext(AuthContext)

  const router = useRouter()
  const { id } = router.query

  console.log(id)

  const handleBuy = () => {
    const data = {
      TicketId: id,
      UserId: isAuth.id
    }

    axios.post('https://lotenal-api.herokuapp.com/purchase/', data).then((resp) => {
      alert("Ticket comprado")
    })
  }

  const results = data

  return (
    <div className="ticketContainer">
      <Head> <title>Lotería Nacional | {results.title}</title> </Head>
      <Navbar />

      <div className="ticketContainer__ticket">
        <h3>{results.title} <span>${results.price}.00</span> </h3>
        <p>{results.desc} </p>
        {!isAuth.status ? (
          <Link href="/login">
            <button>Inicia Sesión</button>
          </Link>
        ) : (
          <button onClick={() => handleBuy()}>Comprar</button>
        )}
      </div>

      <div className="ticketContainer__info">
        <p>En Lotería Nacional tenemos el firme compromiso de difundir a través de los motivos de billetes las conmemoraciones históricas que conforman el legado de nuestra nación. Es por ello que el Sorteo Zodiaco No. 1526, celebramos la “Petición de perdón por agravios a los Pueblos Mayas, “Fin de la Guerra de Castas”. Este acontecimiento fue un movimiento social que los nativos mayas del sur y oriente de Yucatán iniciaron en julio de 1847 contra la población de “blancos” (criollos y mestizos), que se encontraba mayoritariamente establecidos en la porción nor-occidental de la península de yucateca. Está guerra, costó cerca de un cuarto de millón de vida humanas, en los primeros años de la guerra se planteó la división de Yucatán en dos países distintos: uno de mexicanos y otro de indios insurrectos, medida en la que tuvo gran interés Inglaterra, al grado de que se comprometió a negociar con los rebeldes el abandono de las armas y su inserción al trabajo. Los ingleses proporcionaron armas y recursos a los mayas a cambio de madera de "palo de tinte". Estados Unidos también estuvo interesado, aunque con el único objetivo de establecer un imperio esclavista en el Caribe, además de no permitir la entrada de ingleses al continente. Cómo uno de los últimos acontecimientos de la Guerra de Castas fue que la ciudad de Bacalar permaneció en poder de los mayas hasta mayo de 1901, en que fue recuperada por tropas del gobierno Federal. Los soldados no dispararon un solo tiro, porque los indígenas huyeron para internarse en las selvas, donde formaron nuevas aldeas y dando fin a la Guerra de Castas que había durado más de 50 años y habría terminado con la vida de gran parte de la comunidad Maya. La imagen de esta importante conmemoración, aparecerá en 2 millones 400 mil cachitos que serán distribuidos en todos los estados del país.</p>

        <h3>¿Cuándo y dónde?</h3>
        <p>El Sorteo Zodiaco se llevará a cabo en el Salón de Sorteos del Edificio Moro de la Lotería Nacional el domingo 02 de mayo de 2021 en punto de las 20:00 horas.
        Puedes seguir la transmisión del sorteo en vivo, a través de nuestro canal oficial de YouTube: https://www.youtube.com/user/VideotecaLotenal</p>
      </div>
    </div>
  )
}