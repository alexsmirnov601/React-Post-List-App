import { useMemo } from 'react'

/* создаем свой собственный хук и экспортируем (название хуков всегда начинается с use). Первый параметр принимает посты, второй - метод сортировки. Кастомные пользовательские хуки - это хуки, которые внутри себя используют стандартные реакт хуки. Этот хук занимается сортировкой  */

export const useSortedPosts = (posts, sort) => {
  /* коллбэк будет вызван только в том случае, если какая-то из зависимостей в массиве поменяет свое значение. В данном случае нам надо следить за выбранным алгоритмом сортировки и за изменением массива с постами  */
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    } else {
      return posts
    }
  }, [sort, posts])

  return sortedPosts
}

/* этот хук будет возвращать отфильтрованный и отсортированный массив. Аргументами принимает посты, метод сортировки, поисковую строку  */
export const usePosts = (posts, sort, query) => {
  /* здесь мы получаем массив отсортированных постов */
  const sortedPosts = useSortedPosts(posts, sort)

  /* отфильтрованный и отсортированный массив, будет одновременно работать поиск и сортировка */
  const sortedAndSearchedPosts = useMemo(() => {
    /* в данном случае по поисковой строке нам необходимо отфильтровать этот массив  */
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query, sortedPosts])

  return sortedAndSearchedPosts
}
