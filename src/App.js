import { HashRouter } from 'react-router-dom'
import './styles/App.css'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'
import { useEffect, useState } from 'react'

/* В этом компоненте мы будем реализовывать роутинг */

/* чтобы использовать useContext надо все обепнуть в AuthContext.Provider указать value(значение, которое там будет храниться) */

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  /* Чтобы нас не выкидывало на другую странпицу при обновлении сайта, необходимо где-то сохранять авторизован пользователь или нет (например в localStorage), а проверку на эту авторизованность мы будем делать в useEffect */

  /* при первом запуске приложегния, мы будем проверять авторизован пользователь или нет */
  useEffect(() => {
    /* задаем условие из localStorage получаем по ключу auth  какое-то значение и если это значение есть, мы меняем setIsAuth  */
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        setIsAuth: setIsAuth,
        isLoading,
      }}
    >
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </AuthContext.Provider>
  )
}

export default App
