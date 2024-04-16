import React, { SyntheticEvent, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router'
import LoginPage from './login'
import RegisterPage from './register'
import VerificationPage from './verification'

import s from './style.module.scss'

const AuthRootComponent: React.FC = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const location = useLocation()

   const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault()
      // const userData = {
      //    "method": "password",
      //    "password": password,
      //    "csrf_token": csrfToken,
      //    "identifier": email,
      // }

      const returnToUrl = 'https://localhost:5173/login';
      const redirectTo = 'https://accounts.lingoai.ru/self-service/login/browser'

      const headers = {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
      }

      const queryParams = new URLSearchParams({
         return_to: returnToUrl,
      });

      const requestUrl = `${redirectTo}?${queryParams.toString()}`

      try {
         const loginFlow = await axios.get(requestUrl, {
            withCredentials: true,
            headers: headers,
         })

         console.log(loginFlow)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className={s.root}>
         <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.form__wrapper}>
               {
                  location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword} />
                     : location.pathname === '/registration' ? <RegisterPage />
                        : location.pathname === '/verification' ? <VerificationPage />
                           : null
               }
            </div>
         </form>
      </div>
   )
}

export default AuthRootComponent
