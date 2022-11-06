import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  /* Когда мы выходим из приложения, нам необходимо удалить информацию из localStorage */
  const logout = () => {
    setIsAuth(false)
    /* удаляем запись по ключу auth */
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  )
}

export default Navbar
