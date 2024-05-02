import s from '../../style.module.scss'

import eyeIcon from '../../../../assets/img/eye.svg'
//import { SyntheticEvent, useState } from 'react';
import { api } from '../../../../shared/config/axios';

import { useForm } from 'react-hook-form'
import { IconInput, Input } from '../../../../shared/ui';

export const LoginPage = () => {
   type TLoginFormFields = {
      email: string;
      password: string;
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
      // const userData = {
      //    "method": "password",
      //    "password": password,
      //    "csrf_token": csrfToken,
      //    "identifier": email,
      // }

      const returnToUrl = ''
      const redirectTo = 'login/browser'

      const queryParams = new URLSearchParams({
         return_to: returnToUrl,
      })

      const requestUrl = `${redirectTo}?${queryParams.toString()}`

      try {
         const loginFlow = await api.get(requestUrl, {
            withCredentials: true,
         })

         console.log(loginFlow)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className={s.root}>
         <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.form__wrapper}>
               <div className={s.form__title}>Вход</div>
               <div className={s.form__inputsBox}>
                  <Input
                     {...register('email', {
                        required: 'Введите Email!',
                        pattern: {
                           value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                           message: 'Email введен не верно!'
                        }
                     })}
                     name="email"
                     placeholder="Email"
                     type="email"
                     error={errors.email?.message}
                  />
                  <IconInput
                     {...register('password', {
                        required: 'Введите пароль!',
                        minLength: {
                           value: 8,
                           message: "Пароль не может быть менее 8 символов!"
                        }
                     })}
                     name="password"
                     placeholder="Пароль"
                     type="password"
                     icon={eyeIcon}
                     error={errors.password?.message}
                  />
                  <div className={s.form__error}>Ошибка. Неверный пароль</div>
                  <a href="#" className={`${s.form__link} text-color-blue`}>Забыли пароль?</a>
               </div>
               <div className={s.form__buttonBox}>
                  <button type='submit' className={`${s.form__button} ${s.form__button_blue}`}>Войти</button>
                  <div className={s.form__error}>Произошла ошибка при входе. Перезагрузите страницу или попробуйте еще раз.</div>
                  <div className={s.form__bottom}>
                     У вас еще нет аккаунта? <a href="/registration" className={`${s.form__link} text-color-blue`}>Зарегистрироваться</a>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}
