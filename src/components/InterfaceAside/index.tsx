import React, { useState } from 'react'
import s from './InterfaceAside.module.scss'
import logo from '../../assets/img/logo.svg'
import NewGenerationForm from './NewGenerationForm'
import Dialogs from '../Dialogs'

const InterfaceAside: React.FC = () => {
   const [formOpen, setFormOpen] = useState(false)
   const [dialogsOpen, setDialogsOpen] = useState(false)

   const onClickFormOpen = () => setFormOpen(true)
   const onClickFormClose = () => setFormOpen(false)

   const onClickDialogsToggle = () => {
      setDialogsOpen(!dialogsOpen)
   }

   return (
      <div className={s.interfaceAside}>
         <img src={logo} className={s.interfaceAside__logo} />
         {!formOpen ? <div className={s.interfaceAside__buttons}>
            <div onClick={onClickFormOpen} className={`${s.interfaceAside__btn} generationBtn`}>
               Новая генерация
            </div>
            <div onClick={onClickDialogsToggle} className={`${s.interfaceAside__btn} generationBtn`}>
               История генераций
            </div>
            <Dialogs dialogsOpen={dialogsOpen}/>
         </div> : <NewGenerationForm onClickFormClose={onClickFormClose}  />}
      </div>
   )
}

export default InterfaceAside
