// React and Next imports
import React, { useState } from 'react'
import Link from 'next/link'

export default function navbar() {

  const [isActive, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!isActive)
  }

  return (
    <nav className="nav">
      <div className="nav__logo">
        <span className={isActive ? 'nav__logo__bars nav__logo__bars--active' : 'nav__logo__bars'} onClick={toggleActive}></span>
        <h1>LOTENAL</h1>
      </div>

      <div className="nav__user">
        <Link href="/login">
          <button className="nav__user__btn">Inicia Sesión</button>
        </Link>

        <Link href="signup">
          <button className="nav__user__phantom__btn">Regístrate</button>
        </Link>

        <a href="#shop" className="nav__user__gradient__btn">Compra Billetes</a>
      </div>

      <div className={isActive ? 'nav__menu nav__menu--active' : 'nav__menu'}>
        <div className="nav__menu__option" onClick={toggleActive}>
          <h1>Inicio</h1>
          <p>Visita nuestra página principal</p>
        </div>

        <a href="#shop" className="nav__menu__option" onClick={toggleActive}>
          <h1>Tickets</h1>
          <p>Aquí puedes comprar tus cachitos!</p>
        </a>

        <div className="nav__menu__option" onClick={toggleActive}>
          <h1>Resultados</h1>
          <p>Consulta tus resultados</p>
        </div>

        <div className="nav__menu__option" onClick={toggleActive}>
          <h1>Nosotros</h1>
          <p>¿Quieres saber más sobre nosotros?, da click aquí!</p>
        </div>
      </div>
    </nav>
  )
}
