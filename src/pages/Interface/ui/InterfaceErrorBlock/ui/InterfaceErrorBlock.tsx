import React from 'react'
import s from './ErrorBlock.module.scss'
import { Link } from 'react-router-dom'

import errorIcon from '../../../assets/img/errorIcon.svg'

export const InterfaceErrorBlock: React.FC = () => {
   return (
      <div className={s.error}>
         <img src={errorIcon} loading="lazy" alt="ошибка" className={s.error__icon} />
         <div className={s.error__title}>Что-то пошло не так...</div>
         <div className={s.error__description}>
            У нас возникли проблемы с загрузкой этой страницы. Пожалуйста, обновите страницу, чтобы повторить попытку, или свяжитесь с нами, если проблема не исчезнет!
         </div>
         <div className={s.error__btns}>
            <a href="#" className={`${s.error__supportBtn} button`}>
               Связаться с поддержкой
            </a>
            <Link to='/interface' className={`${s.error__reloadBtn} button button_blue`}>
               Обновить страницу
            </Link>
         </div>
      </div>
   )
}
