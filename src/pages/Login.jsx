import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setIsAuth(true)
    /* сохраняем что-то в localStorage по ключу auth (в нем можно сохранять только строки)  */
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={onSubmitHandler}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
