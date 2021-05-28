// React and Next imports
import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthContext } from '../helpers/AuthContext'


export default function navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const [isActive, setActive] = useState(false)

  const router = useRouter()

  const toggleActive = () => {
    setActive(!isActive)
  }

  const logout = () => {
    localStorage.removeItem("accessToken")
    setIsAuth({ ...isAuth, status: false })
    router.push("/")
  }

  return (
    <nav className="nav">
      <div className="nav__logo">
        <span className={isActive ? 'nav__logo__bars nav__logo__bars--active' : 'nav__logo__bars'} onClick={toggleActive}></span>
        <Link href="/">
          <h1>LOTENAL</h1>
        </Link>
      </div>

      <div className="nav__user">
        {!isAuth.status ? (
          <>
            <Link href="/login">
              <button className="nav__user__btn">Inicia Sesión</button>
            </Link>

            <Link href="signup">
              <button className="nav__user__phantom__btn">Regístrate</button>
            </Link>
          </>
        ) : (
          <>
            <button className="nav__user__btn" onClick={() => logout()} id="logout">Cerrar Sesión</button>
            <Link href="profile">
              <button className="nav__user__btn">{isAuth.username}</button>
            </Link>
            <Link href={`/cart/${isAuth.id}`}>
              <button className="nav__user__btn">Carrito</button>
            </Link>
          </>
        )}

        <Link href="/">
          <a className="nav__user__gradient__btn">Compra Billetes</a>
        </Link>
      </div>

      <div className={isActive ? 'nav__menu nav__menu--active' : 'nav__menu'}>
        <Link href="/">
          <div className="nav__menu__option" onClick={toggleActive}>
            <h1>Inicio</h1>
            <p>Visita nuestra página principal</p>
          </div>
        </Link>

        <Link href="/">
          <a href="#shop" className="nav__menu__option" onClick={toggleActive}>
            <h1>Tickets</h1>
            <p>Aquí puedes comprar tus cachitos!</p>
          </a>
        </Link>

        <Link href="/">
          <div className="nav__menu__option" onClick={toggleActive}>
            <h1>Resultados</h1>
            <p>Consulta tus resultados</p>
          </div>
        </Link>

        <Link href="/about">
          <div className="nav__menu__option" onClick={toggleActive}>
            <h1>Nosotros</h1>
            <p>¿Quieres saber más sobre nosotros?, da click aquí!</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}
