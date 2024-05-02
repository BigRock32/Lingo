import React from 'react'
import s from './DialogsSkeletons.module.scss'

const DialogsSkeletons: React.FC = () => {
  return (
   <div className={s.skeletons}>
   <div className={s.skeletons__item}></div>
   <div className={s.skeletons__item}></div>
   <div className={s.skeletons__item}></div>
   <div className={s.skeletons__item}></div>
   <div className={s.skeletons__item}></div>
   <div className={s.skeletons__item}></div>
   <div className={s.skeletons__item}></div>
</div>
  )
}

export default DialogsSkeletons 

