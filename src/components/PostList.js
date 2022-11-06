/*  перебор постов (это родительский компонент для PostItem), тут мы использовали библеотеку react-transition-group, отвечающую за анимацию */
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'

function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem
                posts={posts}
                remove={remove}
                number={index + 1}
                post={post}
              />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

export default PostList
