import { DetailedHTMLProps, forwardRef } from 'react'

import s from './Checkbox.module.scss'

type Props = {
   error?: string
} & DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Checkbox = forwardRef<any, Props>(((props, ref) => {
   const {error, ...rest} = props
   return (
      <div className={s.wrapper}>
         <input id="checkbox" className={error ? `${s.input} ${s.error}` : s.input}
            ref={ref}
            {...rest}
            type="checkbox"
         />
         <label htmlFor='checkbox'></label>
      </div>
   )
}))
