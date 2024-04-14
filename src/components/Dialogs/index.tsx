import React from 'react'
import s from './Dialogs.module.scss'
//import DialogsSkeletons from './DialogsSkeletons'

type DialogsProps = {
   dialogsOpen: boolean
}

const Dialogs: React.FC<DialogsProps> = ({ dialogsOpen }) => {
   return (
      <div className={`${s.dialogs} ${dialogsOpen ? s._isOpen : ''}`}>
         <div className={s.dialogs__list}>
            <div className={`${s.dialogs__item} ${s._current}`}>
               <p className={s.dialogs__item__text}>
                  Generation 1
               </p>
               <input type="hidden" />
            </div>
            <div className={`${s.dialogs__item}`}>
               <p className={s.dialogs__item__text}>
                  Generation 2
               </p>
               <input type="hidden" />
            </div>
            <div className={`${s.dialogs__item}`}>
               <p className={s.dialogs__item__text}>
                  Generation 2
               </p>
               <input type="hidden" />
            </div>
            <div className={`${s.dialogs__item}`}>
               <p className={s.dialogs__item__text}>
                  Generation 2
               </p>
               <input type="hidden" />
            </div>
            <div className={`${s.dialogs__item}`}>
               <p className={s.dialogs__item__text}>
                  Generation 2
               </p>
               <input type="hidden" />
            </div>
            <div className={`${s.dialogs__item}`}>
               <p className={s.dialogs__item__text}>
                  Generation 2
               </p>
               <input type="hidden" />
            </div>
         </div>
         {/* <DialogsSkeletons /> */}
      </div>
   )
}

export default Dialogs
