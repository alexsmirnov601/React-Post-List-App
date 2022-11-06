import About from '../pages/About'
import Posts from '../pages/Posts'
import Navbar from '../components/UI/Navbar/Navbar'
import PostIdPage from '../pages/PostIdPage'
import Login from '../pages/Login'
import { Navigate } from 'react-router-dom'

/* Создали массив роутов, чтобы сделать компонент AppRouter чище */

/* на эти маршруты может попасть только авторизованный пользователь */
export const privateRoutes = [
  {
    path: '/about',
    element: (
      <>
        <Navbar /> <About />
      </>
    ),
  },
  {
    path: '/posts',
    element: (
      <>
        <Navbar />
        <Posts />
      </>
    ),
  },
  {
    path: '/posts/:id',
    element: (
      <>
        <Navbar />
        <PostIdPage />
      </>
    ),
  },
  { path: '*', element: <Navigate to="/posts" /> },
]

/* эти маршруты будут доступны для всех */
export const publicRoutes = [
  { path: '/login', element: <Login /> },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]
