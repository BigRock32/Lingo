import React from 'react'
import s from './InterfaceMainContent.module.scss'
import { InterfaceStartPreview } from '../../InterfaceStartPreview'
import { Chat } from '../../Chat'
import { InterfaceErrorBlock } from '../../InterfaceErrorBlock'
import { InterfaceDropdownBox } from '../../InterfaceDropdownBox'

export const InterfaceMainContent: React.FC = () => {
   return (
      <div className={s.interfaceMainContent}>
         {/* <InterfaceStartPreview /> */}
         <Chat />
         {/* <ErrorBlock /> */}
         <InterfaceDropdownBox />
      </div>
   )
}
