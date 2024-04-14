import React from "react"
import InterfaceAside from "../../components/InterfaceAside"
import s from './InterfacePage.module.scss'
import InterfaceMainContent from "../../components/InterfaceMainContent"

const InterfacePage: React.FC = () => {
   return (
      <div className={s.interfaceWrapper}>
         <InterfaceAside />
         <InterfaceMainContent />
      </div>
   )
}

export default InterfacePage
