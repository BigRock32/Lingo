import React from 'react'
import s from '../style.module.scss'

import eyeIcon from '../../../assets/img/eye.svg'

const RegisterPage: React.FC = () => {
   return (
      <>
         <div className={s.form__title}>Создать аккаунт</div>
         <div className={s.form__inputsBox}>
            <input className={s.form__input} maxLength={256} name="username" placeholder="Имя" type="text" />
            <input className={s.form__input} maxLength={256} name="email" placeholder="Email" type="email" />
            <input className={s.form__input} maxLength={256} name="phone" placeholder="Телефон" type="phone" />
            <div className={s.form__error}>Ошибка. Неверный пароль</div>
         </div>
         <div className={s.form__inputsBox}>
            <div className={s.form__inputWrap}>
               <input className={s.form__input} maxLength={256} name="password" placeholder="Пароль" type="password" />
               <img src={eyeIcon} alt='see' className={s.form__passIcon} />
            </div>
            <div className={s.form__inputWrap}>
               <input className={s.form__input} maxLength={256} name="password" placeholder="Повторите пароль" type="password" />
               <img src={eyeIcon} alt='see' className={s.form__passIcon} />
            </div>
            <div className={s.form__error}>Ошибка. Неверный пароль</div>
         </div>
         <div className={s.form__inputsBox}>
            <div className="">Промокод (при наличии):</div>
            <input className={s.form__input} maxLength={256} name="promo" placeholder="Введите код" type="text" />
            <label className={s.form__privacy}>
               <input type="checkbox" name="privacy_policy" /> Принимаю условия <a href="#" className={`${s.form__link} text-color-blue`}>Политики конфиденциальности</a>
            </label>
         </div>
         <div className={s.form__buttonBox}>
            <button className={`${s.form__button} ${s.form__button_blue}`}>Зарегистрироваться</button>
            <div className={s.form__error}>Произошла ошибка при входе. Перезагрузите страницу или попробуйте еще раз.</div>
            <div className={s.form__bottom}>
               Ужу есть аккаунт? <a href="/login" className={`${s.form__link} text-color-blue`}>Войти</a>
            </div>
         </div>
      </>
   )
}

export default RegisterPage