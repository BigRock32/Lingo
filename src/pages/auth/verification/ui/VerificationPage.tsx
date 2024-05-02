import React from 'react'
import s from '../../style.module.scss'

import { useForm } from 'react-hook-form'
import { Input } from '../../../../shared/ui'

export const VerificationPage: React.FC = () => {
  type TLoginFormFields = {
    code: string;
  }

  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset
  } = useForm<TLoginFormFields>()

  const onSubmit = async () => {
    
  }

  return (
    <div className={s.root}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form__wrapper}>
          <div className={s.form__top}>
            <div className={s.form__title}>Верификация</div>
            <div className={s.form__subtitle}>Код придет на почту: ...</div>
          </div>
          <div className={s.form__inputsBox}>
            <Input
              {...register('code', {
                required: 'Введите код!'
              })}
              name="code"
              placeholder="Введите код"
              type="number"
              error={errors.code?.message}
            />
            <div className={s.form__error}>Ошибка. Неверный пароль</div>
          </div>
          <div className={s.form__buttonBox}>
            <button className={`${s.form__button} ${s.form__button_blue}`}>Войти</button>
            <button className={`${s.form__button} ${s.form__button_blue}`}>Выслать код повторно</button>
          </div>
        </div>
      </form>
    </div>
  )
}
