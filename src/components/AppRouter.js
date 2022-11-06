import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context'
import { privateRoutes, publicRoutes } from '../router'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {
  /* получаем доступ к переменной isAuth из компонента App c помощью хука useContext. Теперь мы можем получать всп поля, которые мы указали в value в компоненте App */

  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
    </Routes>
  )
}

export default AppRouter

/* <Route
path="/about"
element={
  <>
    <Navbar /> <About />
  </>
}
/>
<Route
path="/posts"
element={
  <>
    <Navbar /> <Posts />
  </>
}
/>
<Route
path="/posts/:id"
element={
  <>
    <Navbar /> <PostIdPage />
  </>
}
/>
 */
