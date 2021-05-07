// React and Next imports
import React, { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext } from '../helpers/AuthContext'

// Libraries imports
import axios from 'axios'

export default function login() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const handleSubmit = async event => {
    event.preventDefault()

    const user = {
      email: email,
      password: password
    }

    axios.post("http://localhost:3001/auth/login", user).then((resp) => {
      if (resp.data.error) {
        alert(resp.data.error)
      }

      else {
        localStorage.setItem("accessToken", JSON.stringify(resp.data))
        setIsAuth({ ...isAuth, status: true })
        router.push("/")
      }
    })

    setEmail("")
    setPassword("")
  }

  return (
    <div className="form">
      <Head> <title> Loteria Nacional | Inicia Sesión </title> </Head>

      <div className="form__container">
        <form className="form__container__login" onSubmit={handleSubmit}>
          <Link href="/">
            <div className="form__container__login__close form__container__login__close--left"> X </div>
          </Link>

          <h1 className="form__container__login__title">Inicia Sesión</h1>
          <label htmlFor="" className="form__container__login__input">
            <p>Correo Electrónico</p>
            <input type="email" name="email" id="inputLoginEmail" onChange={(e) => {
              setEmail(e.target.value)
            }} />
          </label>

          <label htmlFor="" className="form__container__login__input">
            <p>Contraseña</p>
            <input type="password" name="password" id="inputLoginPassword" onChange={(e) => {
              setPassword(e.target.value)
            }} />
          </label>

          <button type="submit" className="form__container__login__btn">Iniciar Sesión</button>
        </form>

        <div className="form__container__signup">
          <h1>¿No tienes cuenta?</h1>
          <Link href="/signup">
            <button className="form__container__signup__btn">Crear Cuenta</button>
          </Link>
        </div>
      </div>
    </div>
  )
}