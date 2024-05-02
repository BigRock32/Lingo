import React from 'react'
import s from './AddGenerationForm.module.scss'

type NewGenerationFormProps = {
   onClickFormClose: () => void
}

export const AddGenerationForm: React.FC<NewGenerationFormProps> = ({ onClickFormClose }) => {

   return (
      <form className={s.form} action="#">
         <div className={s.form__item}>
            <div className={s.form__item__labelBox}>
               <div className={s.form__item__label}>
                  Выберите стиль
               </div>
               <div className={s.tooltip}></div>
            </div>
            <button className={`${s.form__btn} generationBtn`}>
               Выберите стиль
            </button>
         </div>
         <div className={s.form__item}>
            <div className={s.form__item__labelBox}>
               <div className={`${s.form__item__label} ${s.form__item__label_fix}`}>
                  Введите характеристики
                  Исходный текст/ Отзыв
               </div>
               <div className={s.tooltip}></div>
            </div>
            <textarea
               className={s.form__textarea}
               placeholder="Пуховик, Сезон - Зима, Материал - Полиэстер, Состав материала  - 100% полиэстер, Температурный режим - от 0 до -30"
               maxLength={5000}
               id='description'
               name='description' />
         </div>
         <div className={s.form__item}>
            <div className={s.form__item__labelBox}>
               <div className={s.form__item__label}>
                  Добавьте ключевые слова
               </div>
               <div className={s.tooltip}></div>
            </div>
            <textarea
               className={`${s.form__textarea} ${s.form__textarea_resize}`}
               placeholder="Пуховик, пуховик женский, бесплатная доставка, черная пуховик, зимняя куртка"
               maxLength={5000}
               id='keyWords'
               name='keyWords' />
         </div>
         <div className={s.form__btnsBox}>
            <button className={`${s.form__btn} generationBtn`}>
               Сгенерировать описание
            </button>
            <button onClick={onClickFormClose} className={`${s.form__btn} ${s.form__btn_light} generationBtn`}>
               Назад в меню
            </button>
         </div>
      </form>
   )
}
