import React from 'react'
import './Header.scss'
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <h2 className='header__title'>cs</h2>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-link">Главная</li>
              <li className="header__menu-link">О нас</li>
              <li className="header__menu-link">Отзывы</li>
              <li className="header__menu-link">Поиск</li>
            </ul>
            <div className="header__register1">
              <button className="header__register-btn">Регистрация/Войти</button>
            </div>
          </nav>
          <div className="header__register">
              <button className="header__register-btn">Регистрация/Войти</button>
            </div>
        </div>
      </header>
    </>
  )
}
