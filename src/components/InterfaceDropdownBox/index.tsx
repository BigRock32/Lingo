import React from 'react'
import s from './InterfaceDropdownBox.module.scss'
import BalanceDropdown from './BalanceDropdown'
import SettingsDropdown from './SettingsDropdown'

const InterfaceDropdownBox: React.FC = () => {

   return (
      <div className={s.dropdowns}>
         <BalanceDropdown />
         <SettingsDropdown />
      </div>
   )
}

export default InterfaceDropdownBox
