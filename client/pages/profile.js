import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../helpers/AuthContext'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Nav from '../components/navbar'

export default function profile() {
  const { isAuth } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("accessToken"))

    if (!auth) router.push("/")
  }, [])

  return (
    <>
      <Head><title>Lotenal | {isAuth.username}</title></Head>
      <Nav />
      <div className="profile">
        <h1>Perfil</h1>

        <div className="profile__input">
          <label>
            <img src="/img/user.svg" alt="" />
            <input type="file" src="/img/user.png" alt="" />
          </label>

          <label>
            <p>Nombre de Usuario:</p>
            <input type="text" name="" id="" placeholder={isAuth.username} />
          </label>

          <label>
            <p>Correo Electrónico:</p>
            <input type="text" name="" id="" placeholder={isAuth.email} />
          </label>

        </div>
      </div>
    </>
  )
}
