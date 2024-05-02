import React from "react"
import { InterfaceAside } from "./InterfaceAside"
import s from './InterfacePage.module.scss'
import { InterfaceMainContent } from "./InterfaceMainContent/ui"

const InterfacePage: React.FC = () => {
   return (
      <div className={s.interfaceWrapper}>
         <InterfaceAside />
         <InterfaceMainContent />
      </div>
   )
}

export default InterfacePage
