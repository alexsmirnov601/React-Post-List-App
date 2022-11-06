// компонент отвечающий за один пост, Дочерний для PostList

import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MyButton from './UI/button/MyButton'

function PostItem({ remove, posts, post, ...props }) {
  let navigate = useNavigate()

  // useEffect(() => {
  //   navigate(`/posts/${post.id}`)
  // }, [navigate])

  // useEffect(() => {
  //   navigate(`/posts/${post.id}`)
  // }, [navigate])

  // navigate(`/posts/${post.id}`)

  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>
            {post.id}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => navigate(`/posts/${post.id}`)}>
            Открыть
          </MyButton>

          <MyButton onClick={() => remove(post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  )
}

export default PostItem
