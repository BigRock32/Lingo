import React from 'react'
import logo from '../../../assets/img/previewLogo.svg'

import s from './InterfaceStartPreview.module.scss'

const InterfaceStartPreview: React.FC = () => {
   return (
      <div className={s.startPreview}>
         <img src={logo} loading="lazy" alt="Логотип" className={s.startPreview__img} />
         <div className={s.startPreview__text}>
            Начните новую генерацию!
         </div>
      </div>
   )
}

export default InterfaceStartPreview
