/* компонент Модальное окно,  */

import React from 'react'
import styles from './MyModal.module.css'

function MyModal({ children, visible, setVisible }) {
  // условное добавление класса
  return (
    <div
      className={`${styles.myModal} ${visible ? styles.active : ''}`}
      onClick={() => setVisible(false)}
    >
      <div
        onClick={(e) =>
          e.stopPropagation()
        } /* stopPropagation далает так, чтобы у нас не менялось состояние приложения при клике (Прекращает дальнейшую передачу текущего события.) */
        className={styles.myModalContent}
      >
        {children}
      </div>
    </div>
  )
}

export default MyModal
