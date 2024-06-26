import React, { useState } from 'react'
import s from './InterfaceDropdownBox.module.scss'

import arrow from '../../../../../assets/img/dropdownArrow.svg'


const BalanceDropdown: React.FC = () => {
   const [open, setOpen] = useState(false)
   const onClickSetOpen = () => {
      setOpen(!open)
   }

   const dropdownRef = React.useRef<HTMLDivElement>(null)

   React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (dropdownRef.current && !e.composedPath().includes(dropdownRef.current)) {
            setOpen(false)
         }
      }
      document.body.addEventListener('click', handleClickOutside)

      return () => document.body.removeEventListener('click', handleClickOutside)
   }, [])

   return (
      <div ref={dropdownRef} className={s.dropdown}>
         <div onClick={onClickSetOpen} className={`${s.dropdown__toggle} ${open ? s.dropdown__toggle_open : ''}`}>
            <div>
               <div className={s.dropdown__title}>Баланс</div>
               <div className={`${s.dropdown__subtitle} ${s.dropdown__subtitle_blue}`}>
                  83 генерации
               </div>
            </div>
            <img src={arrow} alt='↓' className={`${s.dropdown__icon} ${open ? s.dropdown__icon_open : ''}`} />
         </div>
         <nav className={`${s.dropdown__list} ${open ? s.dropdown__list_open : ''}`}>
            <a className={s.dropdown__link}>
               Купить пакет
            </a>
         </nav>
      </div>
   )
}

export default BalanceDropdown
