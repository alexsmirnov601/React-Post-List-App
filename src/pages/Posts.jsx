import { useEffect, useState, useRef } from 'react'
import PostService from '../components/API/PostService'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/Loader/Loader'
import MyModal from '../components/UI/myModal/MyModal'
import Pagination from '../components/UI/pagination/Pagination'
import MySelect from '../components/UI/select/MySelect'
import { useFetching } from '../hooks/useFetching'
import { useObserver } from '../hooks/useObserver'
import { usePosts } from '../hooks/usePosts'
import '../styles/App.css'
import { getPageCount, getPagesArray } from '../utils/pages'

/* Для того, чтобы делать запросы на сервер здесь мы используе библеотку npm пакет axios */

function Posts() {
  const lastElement = useRef()

  const [posts, setPosts] = useState([])

  /*  состояние для селекта (сортировки)
   состояние для инпута (для реализации поиска постов) 
   В соятояни находится объект с двумя полями выбранный алгоритм сортировки sort и поискаовая строка query */

  const [filter, setFilter] = useState({ sort: '', query: '' })

  /* состояние отвечающее за то, видим мы модальное окно или нет */
  const [modal, setModal] = useState(false)

  /* состояние для общего кол-ва постов  */
  const [totalPages, setTotalPages] = useState(0)

  /* кол-во постов на странице */
  const [limit, setLimit] = useState(10)

  // состояние для номера текущей страницы постов
  const [page, setPage] = useState(1)

  // здесь вызываем кастомный хук
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  // здесь вызываем кастомный хук
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      /* переменная в которой будет храниться результат выполнения запроса */
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      /* totalCount - общее кол-во постов */
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
    },
    []
  )

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  // хук для запроса на сервер
  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  // ---------  ЗДЕСЬ НАЧИНАЮТСЯ ФУНКЦИИ -------------------------
  // в эту функцию мы передаем новый пост из компонента PostForm
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // функция для удаления постов
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  /* -------------------------------------------------
  функция для сортировки массива постов (т.к. функция sort не возвращает новый отсортированный массив, а мутирует тот массив к которому она была применена. Состояние наппрямую менять нельзя, поэтому мы развернем посты в новый массив и отсортируем уже этот массив, т.е. в данном случае мы мутируем копию массива и не мутируем состояние напрямую )  
  --------------------------------------------------- */

  /* 
Чтобы добавлять новый контент при изменении страницы есть 2 варианта реализации: 1) Через useEffect и в массив зависимостей добавить номер страницы 

2)Функция, которая будет изменять номер страницы и с измененным номером подгружать новую порцию постов (мы выбрали второй вариант) */
  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' },
        ]}
      />

      {postError && <h1>Произошла ошибка ${postError} </h1>}
      <PostList
        posts={sortedAndSearchedPosts}
        remove={removePost}
        title={'Посты про JS'}
      />
      <div ref={lastElement} style={{ height: 20, background: 'red' }} />
      {isPostsLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  )
}

export default Posts
