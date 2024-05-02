import React from 'react'
import s from './Chat.module.scss'

import arrow from '../../../../../assets/img/arrowRight.svg'

export const Chat: React.FC = () => {
   return (
      <div className={s.chat}>
         <div className={s.chat__wrap}>
            <div className={s.chat__box}>
               <input type="hidden" id="chatId" value="" />
               <input type="hidden" id="dialogId" value="" />
               <div className={s.chat__loader}>печатает...</div>
               <div className={`${s.chat__messageBox} ${s.chat__messageBox_user}`}>
                  <div className={s.chat__titleBox}>
                     <div className={s.chat__title}>Вы</div>
                     <div className={s.chat__date}>10:22</div></div>
                  <div className={`${s.chat__message} ${s.chat__message_user}`}>
                     <div className={s.chat__messageText}>пуховик</div>
                  </div>
               </div>
               <div className={`${s.chat__messageBox} ${s.chat__messageBox_lingo}`}>
                  <div className={s.chat__titleBox}>
                     <div className={s.chat__title}>Lingo</div>
                     <div className={s.chat__date}>10:22</div>
                  </div>
                  <div className={`${s.chat__message} ${s.chat__message_lingo}`}>
                     <div className={s.chat__messageText}>
                        Сумка-клатч - это маленькая и очень удобная сумка, которая будет отличным дополнением к вашему образу. Она доступна в разных ярких цветах, чтобы вы могли подобрать именно тот оттенок, который подойдет вам лучше всего. Эта сумка изготовлена из экокожи, что делает ее не только стильной, но и эко-дружественной. Декоративные элементы в виде цепочки придают ей особый шарм и делают ваш образ еще более выразительным. В сумке есть два отдела, что позволяет удобно разместить все необходимые вещи - мобильный телефон, кошелек, ключи и другие мелочи. Вы сможете легко найти все, что вам нужно, не тратя время на поиски. Удобный ремешок позволяет переносить сумку как в руке, так и на плече, в зависимости от вашего предпочтения и ситуации. Он легко регулируется и идеально подстраивается под ваш размер и комфорт. Сумка-клатч - это не просто аксессуар, это функциональный и стильный предмет, который поможет вам выделиться из толпы и подчеркнуть вашу индивидуальность. Будьте всегда модными и уверенными в себе с нашей уникальной сумкой-клатч.
                        ьный телефон, кошелек, ключи и другие мелочи. Вы сможете легко найти все, что вам нужно, не тратя время на поиски. Удобный ремешок позволяет переносить сумку как в руке, так и на плече, в зависимости от вашего предпочтения и ситуации. Он легко регулируется и идеально подстраивается под ваш размер и комфорт. Сумка-клатч - это не просто аксессуар, это функциональный и стильный предмет, который поможет вам выделиться из толпы и подчеркнуть вашу индивидуальность. Будьте всегда модными и уверенными в себе с нашей уникальной сумкой-клатч.
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={s.chat__error}>
            * Произошла непредвиденная ошибка. Попробуйте снова или обновите страницу.
         </div>
         <div className={s.sendMessageField}>
            <input className={s.sendMessageField__input} maxLength={256} name="message" placeholder="Напишите в чат..." type="text" />
            <img src={arrow} className={s.sendMessageField__btn} />
         </div>
      </div>
   )
}
