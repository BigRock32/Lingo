import { DetailedHTMLProps, forwardRef } from 'react'

import s from './IconInput.module.scss'
import { Input } from '../input'

type Props = {
   icon: string;
   error?: string;
} & DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const IconInput = forwardRef<any, Props>(((props, ref) => {
   const { icon, ...rest } = props
   return (
      <div className={s.wrapper}>
         <Input ref={ref} {...rest} />
         <img src={icon} alt='see' className={s.icon} />
      </div>
   )
}))
