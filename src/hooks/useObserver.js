import { useRef, useEffect } from 'react'

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef()

  /* теперь мы наблюдаем за красным дивом внизу */
  useEffect(() => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    /* entries - массив элементов за которым мы наблюдаем */
    let cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    }

    observer.current = new IntersectionObserver(cb)
    observer.current.observe(ref.current)
  }, [isLoading])
}
