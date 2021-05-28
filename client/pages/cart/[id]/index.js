import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext } from '../../../helpers/AuthContext'

import Navbar from '../../../components/navbar'

export default function index({ data }) {
  const results = data

  const router = useRouter()
  const { isAuth, setIsAuth } = useContext(AuthContext)

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("accessToken"))

    if (!auth) router.push("/")
  }, [])

  return (
    <div>
      <Head> <title>Lotería Nacional | Inicio</title> </Head>
      <Navbar />

      <main>
        <section className="shop cart" id="shop">
          <h1 className="sectionTitle">Carrito</h1>

          <div className="shop__tickets">
            {
              results.map(result => {
                const { id, price, title, desc } = result

                return (
                  <form key={id} onSubmit={() => handleSubmit()}>
                    <div className="shop__tickets__ticket">
                      <input type="hidden" value={`${id}`} />
                      <h3>{title} <span>${price}.00</span> </h3>
                      <p>{desc}</p>
                    </div>
                  </form>
                )
              })
            }
          </div>
        </section>

      </main>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query
  const res = await fetch(`http://localhost:3001/purchase/${id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}