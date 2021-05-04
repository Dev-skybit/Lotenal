// React and Next imports
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Libraries imports
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function login() {
  return (
    <div className="form">
      <Head> <title> Loteria Nacional | Inicia Sesión </title> </Head>

      <div className="form__container">
        <Formik>
          <Form className="form__container__login">
            <Link href="/">
              <div className="form__container__login__close form__container__login__close--left"> X </div>
            </Link>

            <h1 className="form__container__login__title">Inicia Sesión</h1>
            <label htmlFor="" className="form__container__login__input">
              <p>Correo Electrónico</p>
              <Field type="email" name="" id="" />
            </label>

            <label htmlFor="" className="form__container__login__input">
              <p>Contraseña</p>
              <Field type="password" name="" id="" />
            </label>

            <button className="form__container__login__btn">Iniciar Sesión</button>
          </Form>
        </Formik>

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