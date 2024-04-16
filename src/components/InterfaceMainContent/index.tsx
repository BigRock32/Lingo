import React from 'react'
import s from './InterfaceMainContent.module.scss'
import InterfaceStartPreview from './InterfaceStartPreview'
import Chat from './Chat'
import ErrorBlock from './ErrorBlock'
import InterfaceDropdownBox from '../InterfaceDropdownBox'

const InterfaceMainContent: React.FC = () => {
   return (
      <div className={s.interfaceMainContent}>
         {/* <InterfaceStartPreview /> */}
         <Chat />
         {/* <ErrorBlock /> */}
         <InterfaceDropdownBox />
      </div>
   )
}

export default InterfaceMainContent
