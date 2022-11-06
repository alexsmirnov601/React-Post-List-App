import { useState } from 'react'

/* с помощью этого кастомного хука мы обработали самый часто встречающийся кейс это обработка индикатора загрузки, обработка ощибки и выполнение какого-то коллбэка */
export const useFetching = (callback) => {
  /* внутри этого хука бдует состояние, оно будет отвечать за загрузку, а также базовое состояние для обработки  ошибок   */

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  /* возвращаем массив, чтобы его в дальнейшем использовать (деструктуризировать) */
  return [fetching, isLoading, error]
}

/* первый параметр принимает в себя callback - это некий запрос перед которым крутилку надо будет показать и после выполнения которого это крутилку надор будет скрыть */
