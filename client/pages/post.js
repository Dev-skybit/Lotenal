import React, { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext } from '../helpers/AuthContext'

import axios from 'axios'

export default function login() {
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("")
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const handleSubmit = async event => {
    event.preventDefault()

    const post = {
      title: title,
      desc: desc,
      date: date
    }

    axios.post("https://lotenal-api.herokuapp.com/post", post).then((resp) => {
      if (resp.data.error) {
        alert(resp.data.error)
      }

      else {
        router.push("/")
      }
    })

    setTitle("")
    setDesc("")
    setDate("")
  }

  return (
    <div className="form">
      <Head> <title> Loteria Nacional | Inicia Sesión </title> </Head>

      <div className="form__container">
        <form className="form__container__login" onSubmit={handleSubmit}>
          <Link href="/">
            <div className="form__container__login__close form__container__login__close--left"> X </div>
          </Link>

          <h1 className="form__container__login__title">Crear un nuevo post</h1>
          <label htmlFor="" className="form__container__login__input">
            <p>Título del post</p>
            <input type="text" name="title" id="inputTitlePost" onChange={(e) => {
              setTitle(e.target.value)
            }} />
          </label>

          <label htmlFor="" className="form__container__login__input">
            <p>Descripción del post</p>
            <input type="text" name="desc" id="inputDescPost" onChange={(e) => {
              setDesc(e.target.value)
            }} />
          </label>

          <label htmlFor="" className="form__container__login__input">
            <p>Fecha de publicación</p>
            <input type="date" name="date" id="inputDatePost" onChange={(e) => {
              setDate(e.target.value)
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