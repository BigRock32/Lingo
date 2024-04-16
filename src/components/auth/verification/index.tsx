import React from 'react'
import s from '../style.module.scss'

const VerificationPage: React.FC = () => {
  return (
    <>
      <div className={s.form__top}>
        <div className={s.form__title}>Верификация</div>
        <div id="send-text" className={s.form__subtitle}>Код придет на почту: ...</div>
      </div>
      <div className={s.form__inputsBox}>
        <input className={s.form__input} maxLength={256} name="code" placeholder="Введите код" type="number" />
        <div className={s.form__error}>Ошибка. Неверный пароль</div>
      </div>
      <div className={s.form__buttonBox}>
        <button className={`${s.form__button} ${s.form__button_blue}`}>Войти</button>
        <button className={`${s.form__button} ${s.form__button_blue}`}>Выслать код повторно</button>
      </div>
    </>
  )
}

export default VerificationPage
