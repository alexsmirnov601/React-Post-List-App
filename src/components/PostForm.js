// копмопнент форма

import React from 'react'
import { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function PostForm({ create }) {
  // состояние для контролируемеого инпута
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      ...post,
      id: Date.now(),
    }

    // вызываем функцию и передаем новый пост в компонент App
    create(newPost)

    // обновление формы ввода инпута
    setPost({ title: '', body: '' })
  }

  // отдельная функция для оптимизации в onChange
  function handleInputChange(text, name) {
    setPost({ ...post, [name]: text.target.value })
  }

  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => handleInputChange(e, 'title')}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => handleInputChange(e, 'body')}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton disabled={!post.title && !post.body} onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
    </div>
  )
}

export default PostForm
