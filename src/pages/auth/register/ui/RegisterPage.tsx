import React from 'react'
import s from '../../style.module.scss'

import eyeIcon from '../../../../assets/img/eye.svg'
import { useForm } from 'react-hook-form'
import { api } from '../../../../shared/config/axios'
import { Checkbox, IconInput, Input } from '../../../../shared/ui'

export const RegisterPage: React.FC = () => {
   type TRegisterFormFields = {
      username: string;
      email: string;
      phone: number;
      password: string;
      confirm_password: string;
      promo: string;
      privacy_policy: boolean;
   }

   const {
      register,
      watch,
      formState: {
         errors
      },
      handleSubmit,
      reset
   } = useForm<TRegisterFormFields>()

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
               <div className={s.form__title}>Создать аккаунт</div>
               <div className={s.form__inputsBox}>
                  <Input
                     {...register('username', {
                        required: 'Введите имя!'
                     })}
                     name="username"
                     placeholder="Имя"
                     error={errors.username?.message}
                  />
                  <Input
                     {...register('email', {
                        required: 'Введите email!',
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
                  <Input
                     {...register('phone', {
                        required: 'Введите телефон!',
                     })}
                     name="phone"
                     placeholder="Телефон"
                     type="phone"
                     error={errors.phone?.message}
                  />
               </div>
               <div className={s.form__inputsBox}>
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
                  <IconInput
                     {...register("confirm_password", {
                        required: 'Повторите пароль',
                        validate: (value: string) => {
                           if (watch('password') != value) {
                              return "Пароли не совпадают!"
                           }
                        }
                     })}
                     name="confirm_password"
                     placeholder="Повторите пароль"
                     type="password"
                     icon={eyeIcon}
                     error={errors.confirm_password?.message}
                  />
               </div>
               <div className={s.form__inputsBox}>
                  <div className="">Промокод (при наличии):</div>
                  <Input
                     name="promo"
                     placeholder="Введите код"
                  />
                  <label className={s.form__privacy}>
                     <Checkbox
                        {...register("privacy_policy", {
                           required: "This is required"
                        })}
                        name="privacy_policy"
                        error={errors.privacy_policy?.message}
                     />
                     <p>Принимаю условия</p>
                     <a href="#" className={`${s.form__link} text-color-blue`}>Политики конфиденциальности</a>
                  </label>
               </div>
               <div className={s.form__buttonBox}>
                  <button className={`${s.form__button} ${s.form__button_blue}`}>Зарегистрироваться</button>
                  <div className={s.form__error}>Произошла ошибка при входе. Перезагрузите страницу или попробуйте еще раз.</div>
                  <div className={s.form__bottom}>
                     Уже есть аккаунт? <a href="/login" className={`${s.form__link} text-color-blue`}>Войти</a>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}