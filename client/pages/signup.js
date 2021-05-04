// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Libraries imports
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export default function signup() {
  const router = useRouter()

  const initialValues = {
    email: "",
    password: ""
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).max(15).required()
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/user", data).then((resp) => {
      alert("Usuario registrado con éxito")
      router.push("login")
    })
  }

  return (
    <div className="form">
      <Head> <title> Loteria Nacional | Crear Cuenta </title> </Head>

      <div className="form__container">
        <div className="form__container__signup form__container__signup--invert">
          <h1>¿Ya tienes cuenta?</h1>
          <Link href="/login">
            <button className="form__container__signup__btn">Inicia Sesión</button>
          </Link>
        </div>

        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className="form__container__login form__container__login--invert">
            <Link href="/">
              <div className="form__container__login__close form__container__login__close--right"> X </div>
            </Link>

            <h1 className="form__container__login__title">Crea una cuenta</h1>

            <label htmlFor="" className="form__container__login__input">
              <p>Correo Electrónico</p>
              <Field type="email" name="email" id="inputCreateUsername" />
              <ErrorMessage name="email" component="span" />
            </label>

            <label htmlFor="" className="form__container__login__input">
              <p>Contraseña</p>
              <Field type="password" name="password" id="inputCreatePassword" />
              <ErrorMessage name="password" component="span" />
            </label>

            <button type="submit" className="form__container__login__btn">Crear cuenta</button>
          </Form>
        </Formik>
      </div>
    </div >
  )
}