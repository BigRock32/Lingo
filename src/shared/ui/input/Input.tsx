import { DetailedHTMLProps, forwardRef } from 'react'

import s from './Input.module.scss'

type Props = {
   error?: string
} & DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input = forwardRef<any, Props>(((props, ref) => {
   const {error, ...rest} = props
   return (
      <div className={s.wrapper}>
         <input
            ref={ref}
            className={s.input}
            {...rest}
         />
         {error && <p className={s.error}>{error || 'Ошибка!'}</p>}
      </div>
   )
}))
