import React, { ChangeEvent } from 'react'
import s from '../style.module.scss'

import eyeIcon from '../../../assets/img/eye.svg'

type LoginPageProps = {
   setPassword: (e: string) => void;
   setEmail: (e: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({setPassword, setEmail}) => {
   return (
      <>
         <div className={s.form__title}>Вход</div>
         <div className={s.form__inputsBox}>
            <input onChange={(e) => setEmail(e.target.value)} className={s.form__input} maxLength={256} name="email" placeholder="Email или логин" type="text" />
            <div className={s.form__inputWrap}>
               <input onChange={(e) => setPassword(e.target.value)} className={s.form__input} maxLength={256} name="password" placeholder="Пароль" type="password" />
               <img src={eyeIcon} alt='see' className={s.form__passIcon} />
            </div>
            <div className={s.form__error}>Ошибка. Неверный пароль</div>
            <a href="#" className={`${s.form__link} text-color-blue`}>Забыли пароль?</a>
         </div>
         <div className={s.form__buttonBox}>
            <button type='submit' className={`${s.form__button} ${s.form__button_blue}`}>Войти</button>
            <div className={s.form__error}>Произошла ошибка при входе. Перезагрузите страницу или попробуйте еще раз.</div>
            <div className={s.form__bottom}>
               У вас еще нет аккаунта? <a href="/registration" className={`${s.form__link} text-color-blue`}>Зарегистрироваться</a>
            </div>
         </div>
      </>
   )
}

export default LoginPage
